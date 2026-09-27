#!/usr/bin/env -S bash -e

export _user=chump29
export _repo=types

echo -e "📌 Packages:\n"

_bun=$(bun --version)
export _bun
echo -e " • Bun: $_bun"

echo -e "\n🛠️  Creating README.md..."

envsubst < README.template.md > ../README.md

echo -e "\n✔️  Done!\n"
