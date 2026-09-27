# @postfmly/types

### Custom Typescript types <!-- markdownlint-disable MD001 -->

- Nullable
- Nullish
- Optional

---

![Bun](https://img.shields.io/badge/Bun-1.4.2-informational?style=plastic&logo=bun "Bun")

![CodeQL](https://github.com/chump29/types/workflows/CodeQL/badge.svg "CodeQL")

![NO AI](https://img.shields.io/badge/NO-AI-orange?style=plastic "NO AI") &nbsp;
![License](https://img.shields.io/github/license/chump29/types?style=plastic&color=blueviolet&label=License&logo=gplv3 "GPLv3") &nbsp; <!-- markdownlint-disable MD013 -->
![CVE Scan](https://img.shields.io/badge/CVE%20Scan-Pass-success?style=plastic&logo=owasp "CVE Scan")

---

### Installation

```bash
bun add @postfmly/types
```

### Use

```ts
import { Nullable, Nullish, Optional } from "@postfmly/types"

const foo: Nullable<T> = null // T | null
const bar: Nullish<T> = undefined ?? null // T | null | undefined
const baz: Optional<T> = undefined // T | undefined
```

---

### Linting

```bash
bun run lint
```

---

### Building

#### README:

```bash
./docs.sh
```

#### Package:

```bash
./build.sh
```

###### *NOTE: Includes linting and building README*

---

### Publishing

#### Publish:

```bash
./publish.sh
```

###### *NOTES:*

- ###### *Includes building package*

- ###### *Increments `patch` version in `package.json`*

#### Unpublish:

```bash
# current version
npm unpublish --force

# specific version
npm unpublish @postfmly/types@[version] --force
```
