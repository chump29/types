/**
 * Nullable
 * @type {Nullable}
 */
type Nullable<T> = T | null

/**
 * Nullish
 * @type {Nullish}
 */
type Nullish<T> = T | null | undefined

/**
 * Optional
 * @type {Optional}
 */
type Optional<T> = T | undefined

export { type Nullable, type Nullish, type Optional }
