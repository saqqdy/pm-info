[index.md - v1.0.0](README.md) / Exports

# index.md - v1.0.0

## Table of contents

### Interfaces

- [PackageManager](interfaces/PackageManager.md)

### Type Aliases

- [ModulesYML](modules.md#modulesyml)

### Functions

- [normalizePMSpec](modules.md#normalizepmspec)
- [pmInfo](modules.md#pminfo)
- [pmInfoSync](modules.md#pminfosync)

## Type Aliases

### ModulesYML

Ƭ **ModulesYML**: `Record`<`string`, `unknown`\> & { `packageManager`: `string` }

#### Defined in

node_modules/.pnpm/@node-kit+pm-info@1.2.1/node_modules/@node-kit/pm-info/dist/index.d.ts:1

## Functions

### normalizePMSpec

▸ **normalizePMSpec**(`pm`): [`PackageManager`](interfaces/PackageManager.md)

normalizePMSpec

#### Parameters

| Name | Type     | Description                         |
| :--- | :------- | :---------------------------------- |
| `pm` | `string` | packageManager version: pnpm@7.25.0 |

#### Returns

[`PackageManager`](interfaces/PackageManager.md)

result - { name: 'pnpm', version: '7.25.0' }

#### Defined in

node_modules/.pnpm/@node-kit+pm-info@1.2.1/node_modules/@node-kit/pm-info/dist/index.d.ts:11

---

### pmInfo

▸ **pmInfo**(`cwd?`): `Promise`<[`PackageManager`](interfaces/PackageManager.md) \| `null`\>

pmInfo

#### Parameters

| Name   | Type     | Description  |
| :----- | :------- | :----------- |
| `cwd?` | `string` | the pkg path |

#### Returns

`Promise`<[`PackageManager`](interfaces/PackageManager.md) \| `null`\>

result - WorkspaceRootResult | null

#### Defined in

node_modules/.pnpm/@node-kit+pm-info@1.2.1/node_modules/@node-kit/pm-info/dist/index.d.ts:24

---

### pmInfoSync

▸ **pmInfoSync**(`cwd?`): [`PackageManager`](interfaces/PackageManager.md) \| `null`

pmInfoSync

#### Parameters

| Name   | Type     | Description  |
| :----- | :------- | :----------- |
| `cwd?` | `string` | the pkg path |

#### Returns

[`PackageManager`](interfaces/PackageManager.md) \| `null`

result - WorkspaceRootResult | null

#### Defined in

node_modules/.pnpm/@node-kit+pm-info@1.2.1/node_modules/@node-kit/pm-info/dist/index.d.ts:34
