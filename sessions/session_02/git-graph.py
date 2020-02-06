#!/usr/bin/env python
"""
git-graph, a small tool to generate graph visualizations of a Git history
as PNG file.

Find more information on this tool here: https://github.com/HelgeCPH/git-graph

Usage:
  git-graph.py [<from>] [--to=<outpath>]  
  git-graph.py -h | --help
  git-graph.py --version

Options:
  -h --help         Show this screen.
  --version         Show version.
  <from>            Path to repository to visualize [default: ./].
  --to=<outpath>    Path to output image [default: ./git-log.png].

"""


import sys
from sys import platform
from shutil import which
from docopt import docopt
from subprocess import run, PIPE


VERSION = 1.0


def from_log_to_dot(lines):
    """
    # doctest: +NORMALIZE_WHITESPACE
    >>> print("\\n".join(from_log_to_dot([
    ...     "abba (f3ac cc32) master",
    ...     "cc32 () dev, feature-x",
    ...     "f3ac (acb2) ",
    ...     "acb2 (3dba) ",
    ...     "3dba () ",
    ... ])))
    digraph git_graph {
        rankdir = BT
        {
            rank = same
            "abba"
            "master"
        }
        "master" [shape=box, style=filled, fillcolor=orange]
        "master" -> "abba"
        "f3ac" -> "abba"
        "cc32" -> "abba"
        {
            rank = same
            "cc32"
            "dev"
            "feature-x"
        }
        "dev" [shape=box, style=filled, fillcolor=orange]
        "feature-x" [shape=box, style=filled, fillcolor=orange]
        "dev" -> "cc32"
        "feature-x" -> "cc32"
        "acb2" -> "f3ac"
        "3dba" -> "acb2"
    }
    """
    yield "digraph git_graph {"
    yield "    rankdir = BT"
    line: str
    for line in lines:
        commit, _, rest = line.partition(" (")
        parents, _, refs = rest.partition(") ")
        if refs:
            yield "    {"
            yield "        rank = same"
            yield f'        "{commit}"'
            ref_list = refs.split(", ")
            for ref in ref_list:
                yield f'        "{ref}"'
            yield "    }"
            for ref in ref_list:
                yield f'    "{ref}" [shape=box, style=filled, fillcolor=orange]'
            for ref in ref_list:
                yield f'    "{ref}" -> "{commit}"'
        if parents:
            for parent in parents.split(" "):
                yield f'    "{parent}" -> "{commit}" [dir=back]'
    yield "}"


def main(inpath="./", topath="./git-log.png"):
    if not which("dot"):
        # Check if graphviz is installed at all
        print("You need to install graphviz for this tool.")
        exit(1)

    git_log_cmd = (
        "git",
        "-C",
        inpath,
        "log",
        "--branches",
        "--format=%h (%p) %D",
        '--since="1 month ago"',
        "--decorate=short",
        "--decorate-refs=refs/heads/",
    )

    result = run(git_log_cmd, check=True, universal_newlines=True, stdout=PIPE)
    dot = from_log_to_dot(result.stdout.splitlines())

    graphviz_cmd = ("dot", "-o", topath, "-Tpng")
    run(graphviz_cmd, input="".join(dot), encoding="ascii")
    # TODO: Add a bit of error handling here
    print(f"Created {topath}")

    if platform == "darwin":
        open_cmd = ("open", topath)
        run(open_cmd)
    elif platform == "linux":
        open_cmd = ("eog", topath)
        run(open_cmd)


if __name__ == "__main__":

    arguments = docopt(__doc__, version=VERSION)

    if arguments["<from>"]:
        main(inpath=arguments["<from>"], topath=arguments["--to"])
    else:
        main(topath=arguments["--to"])
