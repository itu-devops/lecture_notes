import os
import zlib


fname = os.path.join(
    ".git",
    "objects",
    "ee",
    "d3e6e7dfe575f006667a19f0c1857fca9e5ce2",
)
with open(fname, "rb") as fp:
    file_contents = fp.read()

uncompressed_file_contents = zlib.decompress(file_contents).decode("utf-8")
print(uncompressed_file_contents)
