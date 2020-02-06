import os
import zlib


fname = os.path.join(
    os.environ["HOME"],
    "Desktop",
    "flask-minitwit-mongodb",
    ".git",
    "objects",
    "ec",
    "e6e11424b1f09cfc2bab1bddfe61dcc6545944",
)
with open(fname, "rb") as fp:
    file_contents = fp.read()

uncompressed_file_contents = zlib.decompress(file_contents)
uncompressed_file_contents = uncompressed_file_contents.decode("ascii")
print(uncompressed_file_contents)
