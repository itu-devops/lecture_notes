import os
import zlib


fname = os.path.join(
    ".git",
    "objects",
    "1e",
    "9ced293fe5bacf5fad2fb3d84490de24ea5273",
)
with open(fname, "rb") as fp:
    file_contents = fp.read()

uncompressed_file_contents = zlib.decompress(file_contents)
# See https://stackoverflow.com/a/35902553 for decoding futher
print(uncompressed_file_contents)
