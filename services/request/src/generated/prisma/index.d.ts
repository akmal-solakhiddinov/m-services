
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model Friends
 * 
 */
export type Friends = $Result.DefaultSelection<Prisma.$FriendsPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Request_status: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type Request_status = (typeof Request_status)[keyof typeof Request_status]


export const Message_fileType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  FILE: 'FILE',
  AUDIO: 'AUDIO'
};

export type Message_fileType = (typeof Message_fileType)[keyof typeof Message_fileType]


export const Friends_relationshipType: {
  friend: 'friend',
  blocked: 'blocked'
};

export type Friends_relationshipType = (typeof Friends_relationshipType)[keyof typeof Friends_relationshipType]


export const User_status: {
  online: 'online',
  offline: 'offline'
};

export type User_status = (typeof User_status)[keyof typeof User_status]


export const Friends_status: {
  active: 'active',
  removed: 'removed'
};

export type Friends_status = (typeof Friends_status)[keyof typeof Friends_status]


export const Message_status: {
  seen: 'seen',
  unseen: 'unseen'
};

export type Message_status = (typeof Message_status)[keyof typeof Message_status]


export const User_account: {
  private: 'private',
  public: 'public'
};

export type User_account = (typeof User_account)[keyof typeof User_account]

}

export type Request_status = $Enums.Request_status

export const Request_status: typeof $Enums.Request_status

export type Message_fileType = $Enums.Message_fileType

export const Message_fileType: typeof $Enums.Message_fileType

export type Friends_relationshipType = $Enums.Friends_relationshipType

export const Friends_relationshipType: typeof $Enums.Friends_relationshipType

export type User_status = $Enums.User_status

export const User_status: typeof $Enums.User_status

export type Friends_status = $Enums.Friends_status

export const Friends_status: typeof $Enums.Friends_status

export type Message_status = $Enums.Message_status

export const Message_status: typeof $Enums.Message_status

export type User_account = $Enums.User_account

export const User_account: typeof $Enums.User_account

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ChatRooms
 * const chatRooms = await prisma.chatRoom.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ChatRooms
   * const chatRooms = await prisma.chatRoom.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friends`: Exposes CRUD operations for the **Friends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friends.findMany()
    * ```
    */
  get friends(): Prisma.FriendsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ChatRoom: 'ChatRoom',
    Friends: 'Friends',
    Message: 'Message',
    Request: 'Request',
    Session: 'Session',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chatRoom" | "friends" | "message" | "request" | "session" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      Friends: {
        payload: Prisma.$FriendsPayload<ExtArgs>
        fields: Prisma.FriendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          findFirst: {
            args: Prisma.FriendsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          findMany: {
            args: Prisma.FriendsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>[]
          }
          create: {
            args: Prisma.FriendsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          createMany: {
            args: Prisma.FriendsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>[]
          }
          delete: {
            args: Prisma.FriendsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          update: {
            args: Prisma.FriendsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          deleteMany: {
            args: Prisma.FriendsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>[]
          }
          upsert: {
            args: Prisma.FriendsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendsPayload>
          }
          aggregate: {
            args: Prisma.FriendsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriends>
          }
          groupBy: {
            args: Prisma.FriendsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendsCountArgs<ExtArgs>
            result: $Utils.Optional<FriendsCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    chatRoom?: ChatRoomOmit
    friends?: FriendsOmit
    message?: MessageOmit
    request?: RequestOmit
    session?: SessionOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    messages: number
    Message: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatRoomCountOutputTypeCountMessagesArgs
    Message?: boolean | ChatRoomCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes
  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    ChatRoom: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatRoom?: boolean | MessageCountOutputTypeCountChatRoomArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountChatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chatRoomsOne: number
    chatRoomsTwo: number
    friends: number
    relatedFriends: number
    receivedMessages: number
    sentMessages: number
    receivedRequests: number
    sentRequests: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoomsOne?: boolean | UserCountOutputTypeCountChatRoomsOneArgs
    chatRoomsTwo?: boolean | UserCountOutputTypeCountChatRoomsTwoArgs
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    relatedFriends?: boolean | UserCountOutputTypeCountRelatedFriendsArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedRequests?: boolean | UserCountOutputTypeCountReceivedRequestsArgs
    sentRequests?: boolean | UserCountOutputTypeCountSentRequestsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomsOneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomsTwoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRelatedFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomAvgAggregateOutputType = {
    unSeenMessageCount: number | null
  }

  export type ChatRoomSumAggregateOutputType = {
    unSeenMessageCount: number | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: string | null
    userOneId: string | null
    userTwoId: string | null
    unSeenMessageCount: number | null
    lastMessageId: string | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: string | null
    userOneId: string | null
    userTwoId: string | null
    unSeenMessageCount: number | null
    lastMessageId: string | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    userOneId: number
    userTwoId: number
    unSeenMessageCount: number
    lastMessageId: number
    _all: number
  }


  export type ChatRoomAvgAggregateInputType = {
    unSeenMessageCount?: true
  }

  export type ChatRoomSumAggregateInputType = {
    unSeenMessageCount?: true
  }

  export type ChatRoomMinAggregateInputType = {
    id?: true
    userOneId?: true
    userTwoId?: true
    unSeenMessageCount?: true
    lastMessageId?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    userOneId?: true
    userTwoId?: true
    unSeenMessageCount?: true
    lastMessageId?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    userOneId?: true
    userTwoId?: true
    unSeenMessageCount?: true
    lastMessageId?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _avg?: ChatRoomAvgAggregateInputType
    _sum?: ChatRoomSumAggregateInputType
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: string
    userOneId: string
    userTwoId: string
    unSeenMessageCount: number
    lastMessageId: string | null
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userOneId?: boolean
    userTwoId?: boolean
    unSeenMessageCount?: boolean
    lastMessageId?: boolean
    lastMessage?: boolean | ChatRoom$lastMessageArgs<ExtArgs>
    userOne?: boolean | UserDefaultArgs<ExtArgs>
    userTwo?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    Message?: boolean | ChatRoom$MessageArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userOneId?: boolean
    userTwoId?: boolean
    unSeenMessageCount?: boolean
    lastMessageId?: boolean
    lastMessage?: boolean | ChatRoom$lastMessageArgs<ExtArgs>
    userOne?: boolean | UserDefaultArgs<ExtArgs>
    userTwo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userOneId?: boolean
    userTwoId?: boolean
    unSeenMessageCount?: boolean
    lastMessageId?: boolean
    lastMessage?: boolean | ChatRoom$lastMessageArgs<ExtArgs>
    userOne?: boolean | UserDefaultArgs<ExtArgs>
    userTwo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    userOneId?: boolean
    userTwoId?: boolean
    unSeenMessageCount?: boolean
    lastMessageId?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userOneId" | "userTwoId" | "unSeenMessageCount" | "lastMessageId", ExtArgs["result"]["chatRoom"]>
  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lastMessage?: boolean | ChatRoom$lastMessageArgs<ExtArgs>
    userOne?: boolean | UserDefaultArgs<ExtArgs>
    userTwo?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    Message?: boolean | ChatRoom$MessageArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lastMessage?: boolean | ChatRoom$lastMessageArgs<ExtArgs>
    userOne?: boolean | UserDefaultArgs<ExtArgs>
    userTwo?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lastMessage?: boolean | ChatRoom$lastMessageArgs<ExtArgs>
    userOne?: boolean | UserDefaultArgs<ExtArgs>
    userTwo?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      lastMessage: Prisma.$MessagePayload<ExtArgs> | null
      userOne: Prisma.$UserPayload<ExtArgs>
      userTwo: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
      Message: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userOneId: string
      userTwoId: string
      unSeenMessageCount: number
      lastMessageId: string | null
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
     */
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRooms and returns the data saved in the database.
     * @param {ChatRoomCreateManyAndReturnArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms and returns the data updated in the database.
     * @param {ChatRoomUpdateManyAndReturnArgs} args - Arguments to update many ChatRooms.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lastMessage<T extends ChatRoom$lastMessageArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$lastMessageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userOne<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userTwo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends ChatRoom$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Message<T extends ChatRoom$MessageArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$MessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'String'>
    readonly userOneId: FieldRef<"ChatRoom", 'String'>
    readonly userTwoId: FieldRef<"ChatRoom", 'String'>
    readonly unSeenMessageCount: FieldRef<"ChatRoom", 'Int'>
    readonly lastMessageId: FieldRef<"ChatRoom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom createManyAndReturn
   */
  export type ChatRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom updateManyAndReturn
   */
  export type ChatRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom.lastMessage
   */
  export type ChatRoom$lastMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * ChatRoom.messages
   */
  export type ChatRoom$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * ChatRoom.Message
   */
  export type ChatRoom$MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model Friends
   */

  export type AggregateFriends = {
    _count: FriendsCountAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  export type FriendsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    relatedUserId: string | null
    relationshipType: $Enums.Friends_relationshipType | null
    status: $Enums.Friends_status | null
    created: Date | null
    updated: Date | null
  }

  export type FriendsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    relatedUserId: string | null
    relationshipType: $Enums.Friends_relationshipType | null
    status: $Enums.Friends_status | null
    created: Date | null
    updated: Date | null
  }

  export type FriendsCountAggregateOutputType = {
    id: number
    userId: number
    relatedUserId: number
    relationshipType: number
    status: number
    created: number
    updated: number
    _all: number
  }


  export type FriendsMinAggregateInputType = {
    id?: true
    userId?: true
    relatedUserId?: true
    relationshipType?: true
    status?: true
    created?: true
    updated?: true
  }

  export type FriendsMaxAggregateInputType = {
    id?: true
    userId?: true
    relatedUserId?: true
    relationshipType?: true
    status?: true
    created?: true
    updated?: true
  }

  export type FriendsCountAggregateInputType = {
    id?: true
    userId?: true
    relatedUserId?: true
    relationshipType?: true
    status?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type FriendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to aggregate.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendsMaxAggregateInputType
  }

  export type GetFriendsAggregateType<T extends FriendsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriends[P]>
      : GetScalarType<T[P], AggregateFriends[P]>
  }




  export type FriendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendsWhereInput
    orderBy?: FriendsOrderByWithAggregationInput | FriendsOrderByWithAggregationInput[]
    by: FriendsScalarFieldEnum[] | FriendsScalarFieldEnum
    having?: FriendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendsCountAggregateInputType | true
    _min?: FriendsMinAggregateInputType
    _max?: FriendsMaxAggregateInputType
  }

  export type FriendsGroupByOutputType = {
    id: string
    userId: string
    relatedUserId: string
    relationshipType: $Enums.Friends_relationshipType
    status: $Enums.Friends_status
    created: Date
    updated: Date
    _count: FriendsCountAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  type GetFriendsGroupByPayload<T extends FriendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendsGroupByOutputType[P]>
        }
      >
    >


  export type FriendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    relatedUserId?: boolean
    relationshipType?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type FriendsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    relatedUserId?: boolean
    relationshipType?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type FriendsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    relatedUserId?: boolean
    relationshipType?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type FriendsSelectScalar = {
    id?: boolean
    userId?: boolean
    relatedUserId?: boolean
    relationshipType?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
  }

  export type FriendsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "relatedUserId" | "relationshipType" | "status" | "created" | "updated", ExtArgs["result"]["friends"]>
  export type FriendsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    relatedUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friends"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      relatedUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      relatedUserId: string
      relationshipType: $Enums.Friends_relationshipType
      status: $Enums.Friends_status
      created: Date
      updated: Date
    }, ExtArgs["result"]["friends"]>
    composites: {}
  }

  type FriendsGetPayload<S extends boolean | null | undefined | FriendsDefaultArgs> = $Result.GetResult<Prisma.$FriendsPayload, S>

  type FriendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendsCountAggregateInputType | true
    }

  export interface FriendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friends'], meta: { name: 'Friends' } }
    /**
     * Find zero or one Friends that matches the filter.
     * @param {FriendsFindUniqueArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendsFindUniqueArgs>(args: SelectSubset<T, FriendsFindUniqueArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friends that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendsFindUniqueOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendsFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsFindFirstArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendsFindFirstArgs>(args?: SelectSubset<T, FriendsFindFirstArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsFindFirstOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendsFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friends.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friends.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendsWithIdOnly = await prisma.friends.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendsFindManyArgs>(args?: SelectSubset<T, FriendsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friends.
     * @param {FriendsCreateArgs} args - Arguments to create a Friends.
     * @example
     * // Create one Friends
     * const Friends = await prisma.friends.create({
     *   data: {
     *     // ... data to create a Friends
     *   }
     * })
     * 
     */
    create<T extends FriendsCreateArgs>(args: SelectSubset<T, FriendsCreateArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendsCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendsCreateManyArgs>(args?: SelectSubset<T, FriendsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {FriendsCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friends and only return the `id`
     * const friendsWithIdOnly = await prisma.friends.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendsCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friends.
     * @param {FriendsDeleteArgs} args - Arguments to delete one Friends.
     * @example
     * // Delete one Friends
     * const Friends = await prisma.friends.delete({
     *   where: {
     *     // ... filter to delete one Friends
     *   }
     * })
     * 
     */
    delete<T extends FriendsDeleteArgs>(args: SelectSubset<T, FriendsDeleteArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friends.
     * @param {FriendsUpdateArgs} args - Arguments to update one Friends.
     * @example
     * // Update one Friends
     * const friends = await prisma.friends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendsUpdateArgs>(args: SelectSubset<T, FriendsUpdateArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendsDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendsDeleteManyArgs>(args?: SelectSubset<T, FriendsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendsUpdateManyArgs>(args: SelectSubset<T, FriendsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {FriendsUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friends and only return the `id`
     * const friendsWithIdOnly = await prisma.friends.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendsUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friends.
     * @param {FriendsUpsertArgs} args - Arguments to update or create a Friends.
     * @example
     * // Update or create a Friends
     * const friends = await prisma.friends.upsert({
     *   create: {
     *     // ... data to create a Friends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friends we want to update
     *   }
     * })
     */
    upsert<T extends FriendsUpsertArgs>(args: SelectSubset<T, FriendsUpsertArgs<ExtArgs>>): Prisma__FriendsClient<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friends.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendsCountArgs>(
      args?: Subset<T, FriendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendsAggregateArgs>(args: Subset<T, FriendsAggregateArgs>): Prisma.PrismaPromise<GetFriendsAggregateType<T>>

    /**
     * Group by Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendsGroupByArgs['orderBy'] }
        : { orderBy?: FriendsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friends model
   */
  readonly fields: FriendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relatedUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friends model
   */
  interface FriendsFieldRefs {
    readonly id: FieldRef<"Friends", 'String'>
    readonly userId: FieldRef<"Friends", 'String'>
    readonly relatedUserId: FieldRef<"Friends", 'String'>
    readonly relationshipType: FieldRef<"Friends", 'Friends_relationshipType'>
    readonly status: FieldRef<"Friends", 'Friends_status'>
    readonly created: FieldRef<"Friends", 'DateTime'>
    readonly updated: FieldRef<"Friends", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friends findUnique
   */
  export type FriendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends findUniqueOrThrow
   */
  export type FriendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends findFirst
   */
  export type FriendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * Friends findFirstOrThrow
   */
  export type FriendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * Friends findMany
   */
  export type FriendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * Friends create
   */
  export type FriendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * The data needed to create a Friends.
     */
    data: XOR<FriendsCreateInput, FriendsUncheckedCreateInput>
  }

  /**
   * Friends createMany
   */
  export type FriendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendsCreateManyInput | FriendsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friends createManyAndReturn
   */
  export type FriendsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * The data used to create many Friends.
     */
    data: FriendsCreateManyInput | FriendsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friends update
   */
  export type FriendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * The data needed to update a Friends.
     */
    data: XOR<FriendsUpdateInput, FriendsUncheckedUpdateInput>
    /**
     * Choose, which Friends to update.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends updateMany
   */
  export type FriendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendsWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friends updateManyAndReturn
   */
  export type FriendsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendsWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friends upsert
   */
  export type FriendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * The filter to search for the Friends to update in case it exists.
     */
    where: FriendsWhereUniqueInput
    /**
     * In case the Friends found by the `where` argument doesn't exist, create a new Friends with this data.
     */
    create: XOR<FriendsCreateInput, FriendsUncheckedCreateInput>
    /**
     * In case the Friends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendsUpdateInput, FriendsUncheckedUpdateInput>
  }

  /**
   * Friends delete
   */
  export type FriendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    /**
     * Filter which Friends to delete.
     */
    where: FriendsWhereUniqueInput
  }

  /**
   * Friends deleteMany
   */
  export type FriendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendsWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friends without action
   */
  export type FriendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    file: string | null
    fileType: $Enums.Message_fileType | null
    senderId: string | null
    receiverId: string | null
    chatId: string | null
    status: $Enums.Message_status | null
    created: Date | null
    updated: Date | null
    deleted: boolean | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    file: string | null
    fileType: $Enums.Message_fileType | null
    senderId: string | null
    receiverId: string | null
    chatId: string | null
    status: $Enums.Message_status | null
    created: Date | null
    updated: Date | null
    deleted: boolean | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    file: number
    fileType: number
    senderId: number
    receiverId: number
    chatId: number
    status: number
    created: number
    updated: number
    deleted: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    file?: true
    fileType?: true
    senderId?: true
    receiverId?: true
    chatId?: true
    status?: true
    created?: true
    updated?: true
    deleted?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    file?: true
    fileType?: true
    senderId?: true
    receiverId?: true
    chatId?: true
    status?: true
    created?: true
    updated?: true
    deleted?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    file?: true
    fileType?: true
    senderId?: true
    receiverId?: true
    chatId?: true
    status?: true
    created?: true
    updated?: true
    deleted?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string | null
    file: string | null
    fileType: $Enums.Message_fileType | null
    senderId: string
    receiverId: string
    chatId: string
    status: $Enums.Message_status
    created: Date
    updated: Date
    deleted: boolean
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    file?: boolean
    fileType?: boolean
    senderId?: boolean
    receiverId?: boolean
    chatId?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
    deleted?: boolean
    chatRoomLast?: boolean | Message$chatRoomLastArgs<ExtArgs>
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    ChatRoom?: boolean | Message$ChatRoomArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    file?: boolean
    fileType?: boolean
    senderId?: boolean
    receiverId?: boolean
    chatId?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
    deleted?: boolean
    chatRoomLast?: boolean | Message$chatRoomLastArgs<ExtArgs>
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    file?: boolean
    fileType?: boolean
    senderId?: boolean
    receiverId?: boolean
    chatId?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
    deleted?: boolean
    chatRoomLast?: boolean | Message$chatRoomLastArgs<ExtArgs>
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    file?: boolean
    fileType?: boolean
    senderId?: boolean
    receiverId?: boolean
    chatId?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
    deleted?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "file" | "fileType" | "senderId" | "receiverId" | "chatId" | "status" | "created" | "updated" | "deleted", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoomLast?: boolean | Message$chatRoomLastArgs<ExtArgs>
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    ChatRoom?: boolean | Message$ChatRoomArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoomLast?: boolean | Message$chatRoomLastArgs<ExtArgs>
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoomLast?: boolean | Message$chatRoomLastArgs<ExtArgs>
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chatRoomLast: Prisma.$ChatRoomPayload<ExtArgs> | null
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      ChatRoom: Prisma.$ChatRoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string | null
      file: string | null
      fileType: $Enums.Message_fileType | null
      senderId: string
      receiverId: string
      chatId: string
      status: $Enums.Message_status
      created: Date
      updated: Date
      deleted: boolean
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatRoomLast<T extends Message$chatRoomLastArgs<ExtArgs> = {}>(args?: Subset<T, Message$chatRoomLastArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chatRoom<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ChatRoom<T extends Message$ChatRoomArgs<ExtArgs> = {}>(args?: Subset<T, Message$ChatRoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly file: FieldRef<"Message", 'String'>
    readonly fileType: FieldRef<"Message", 'Message_fileType'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly status: FieldRef<"Message", 'Message_status'>
    readonly created: FieldRef<"Message", 'DateTime'>
    readonly updated: FieldRef<"Message", 'DateTime'>
    readonly deleted: FieldRef<"Message", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.chatRoomLast
   */
  export type Message$chatRoomLastArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
  }

  /**
   * Message.ChatRoom
   */
  export type Message$ChatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    friendId: string | null
    status: $Enums.Request_status | null
    created: Date | null
    updated: Date | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    friendId: string | null
    status: $Enums.Request_status | null
    created: Date | null
    updated: Date | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    senderId: number
    friendId: number
    status: number
    created: number
    updated: number
    _all: number
  }


  export type RequestMinAggregateInputType = {
    id?: true
    senderId?: true
    friendId?: true
    status?: true
    created?: true
    updated?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    senderId?: true
    friendId?: true
    status?: true
    created?: true
    updated?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    senderId?: true
    friendId?: true
    status?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    senderId: string
    friendId: string
    status: $Enums.Request_status
    created: Date
    updated: Date
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    friendId?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    friendId?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    friendId?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    senderId?: boolean
    friendId?: boolean
    status?: boolean
    created?: boolean
    updated?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "friendId" | "status" | "created" | "updated", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      friendId: string
      status: $Enums.Request_status
      created: Date
      updated: Date
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly senderId: FieldRef<"Request", 'String'>
    readonly friendId: FieldRef<"Request", 'String'>
    readonly status: FieldRef<"Request", 'Request_status'>
    readonly created: FieldRef<"Request", 'DateTime'>
    readonly updated: FieldRef<"Request", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    ip: string | null
    device: string | null
    userAgent: string | null
    created: Date | null
    updated: Date | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    ip: string | null
    device: string | null
    userAgent: string | null
    created: Date | null
    updated: Date | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    ip: number
    device: number
    userAgent: number
    created: number
    updated: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ip?: true
    device?: true
    userAgent?: true
    created?: true
    updated?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ip?: true
    device?: true
    userAgent?: true
    created?: true
    updated?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ip?: true
    device?: true
    userAgent?: true
    created?: true
    updated?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    ip: string
    device: string
    userAgent: string
    created: Date
    updated: Date
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    ip?: boolean
    device?: boolean
    userAgent?: boolean
    created?: boolean
    updated?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    ip?: boolean
    device?: boolean
    userAgent?: boolean
    created?: boolean
    updated?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    ip?: boolean
    device?: boolean
    userAgent?: boolean
    created?: boolean
    updated?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    ip?: boolean
    device?: boolean
    userAgent?: boolean
    created?: boolean
    updated?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "ip" | "device" | "userAgent" | "created" | "updated" | "expiresAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      ip: string
      device: string
      userAgent: string
      created: Date
      updated: Date
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly ip: FieldRef<"Session", 'String'>
    readonly device: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly created: FieldRef<"Session", 'DateTime'>
    readonly updated: FieldRef<"Session", 'DateTime'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    fullName: string | null
    status: $Enums.User_status | null
    lastLogin: Date | null
    password: string | null
    image: string | null
    isActivated: boolean | null
    created: Date | null
    updated: Date | null
    deleted: boolean | null
    account: $Enums.User_account | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    fullName: string | null
    status: $Enums.User_status | null
    lastLogin: Date | null
    password: string | null
    image: string | null
    isActivated: boolean | null
    created: Date | null
    updated: Date | null
    deleted: boolean | null
    account: $Enums.User_account | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    fullName: number
    status: number
    lastLogin: number
    password: number
    image: number
    isActivated: number
    created: number
    updated: number
    deleted: number
    account: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullName?: true
    status?: true
    lastLogin?: true
    password?: true
    image?: true
    isActivated?: true
    created?: true
    updated?: true
    deleted?: true
    account?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullName?: true
    status?: true
    lastLogin?: true
    password?: true
    image?: true
    isActivated?: true
    created?: true
    updated?: true
    deleted?: true
    account?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullName?: true
    status?: true
    lastLogin?: true
    password?: true
    image?: true
    isActivated?: true
    created?: true
    updated?: true
    deleted?: true
    account?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string | null
    fullName: string | null
    status: $Enums.User_status
    lastLogin: Date | null
    password: string
    image: string | null
    isActivated: boolean
    created: Date
    updated: Date
    deleted: boolean
    account: $Enums.User_account
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    fullName?: boolean
    status?: boolean
    lastLogin?: boolean
    password?: boolean
    image?: boolean
    isActivated?: boolean
    created?: boolean
    updated?: boolean
    deleted?: boolean
    account?: boolean
    chatRoomsOne?: boolean | User$chatRoomsOneArgs<ExtArgs>
    chatRoomsTwo?: boolean | User$chatRoomsTwoArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    relatedFriends?: boolean | User$relatedFriendsArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    fullName?: boolean
    status?: boolean
    lastLogin?: boolean
    password?: boolean
    image?: boolean
    isActivated?: boolean
    created?: boolean
    updated?: boolean
    deleted?: boolean
    account?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    fullName?: boolean
    status?: boolean
    lastLogin?: boolean
    password?: boolean
    image?: boolean
    isActivated?: boolean
    created?: boolean
    updated?: boolean
    deleted?: boolean
    account?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    fullName?: boolean
    status?: boolean
    lastLogin?: boolean
    password?: boolean
    image?: boolean
    isActivated?: boolean
    created?: boolean
    updated?: boolean
    deleted?: boolean
    account?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "fullName" | "status" | "lastLogin" | "password" | "image" | "isActivated" | "created" | "updated" | "deleted" | "account", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoomsOne?: boolean | User$chatRoomsOneArgs<ExtArgs>
    chatRoomsTwo?: boolean | User$chatRoomsTwoArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    relatedFriends?: boolean | User$relatedFriendsArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chatRoomsOne: Prisma.$ChatRoomPayload<ExtArgs>[]
      chatRoomsTwo: Prisma.$ChatRoomPayload<ExtArgs>[]
      friends: Prisma.$FriendsPayload<ExtArgs>[]
      relatedFriends: Prisma.$FriendsPayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedRequests: Prisma.$RequestPayload<ExtArgs>[]
      sentRequests: Prisma.$RequestPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string | null
      fullName: string | null
      status: $Enums.User_status
      lastLogin: Date | null
      password: string
      image: string | null
      isActivated: boolean
      created: Date
      updated: Date
      deleted: boolean
      account: $Enums.User_account
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatRoomsOne<T extends User$chatRoomsOneArgs<ExtArgs> = {}>(args?: Subset<T, User$chatRoomsOneArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRoomsTwo<T extends User$chatRoomsTwoArgs<ExtArgs> = {}>(args?: Subset<T, User$chatRoomsTwoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedFriends<T extends User$relatedFriendsArgs<ExtArgs> = {}>(args?: Subset<T, User$relatedFriendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRequests<T extends User$receivedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentRequests<T extends User$sentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'User_status'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly isActivated: FieldRef<"User", 'Boolean'>
    readonly created: FieldRef<"User", 'DateTime'>
    readonly updated: FieldRef<"User", 'DateTime'>
    readonly deleted: FieldRef<"User", 'Boolean'>
    readonly account: FieldRef<"User", 'User_account'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.chatRoomsOne
   */
  export type User$chatRoomsOneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * User.chatRoomsTwo
   */
  export type User$chatRoomsTwoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    where?: FriendsWhereInput
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    cursor?: FriendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * User.relatedFriends
   */
  export type User$relatedFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friends
     */
    select?: FriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friends
     */
    omit?: FriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendsInclude<ExtArgs> | null
    where?: FriendsWhereInput
    orderBy?: FriendsOrderByWithRelationInput | FriendsOrderByWithRelationInput[]
    cursor?: FriendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedRequests
   */
  export type User$receivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.sentRequests
   */
  export type User$sentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    userOneId: 'userOneId',
    userTwoId: 'userTwoId',
    unSeenMessageCount: 'unSeenMessageCount',
    lastMessageId: 'lastMessageId'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const FriendsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    relatedUserId: 'relatedUserId',
    relationshipType: 'relationshipType',
    status: 'status',
    created: 'created',
    updated: 'updated'
  };

  export type FriendsScalarFieldEnum = (typeof FriendsScalarFieldEnum)[keyof typeof FriendsScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    file: 'file',
    fileType: 'fileType',
    senderId: 'senderId',
    receiverId: 'receiverId',
    chatId: 'chatId',
    status: 'status',
    created: 'created',
    updated: 'updated',
    deleted: 'deleted'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    friendId: 'friendId',
    status: 'status',
    created: 'created',
    updated: 'updated'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    ip: 'ip',
    device: 'device',
    userAgent: 'userAgent',
    created: 'created',
    updated: 'updated',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    fullName: 'fullName',
    status: 'status',
    lastLogin: 'lastLogin',
    password: 'password',
    image: 'image',
    isActivated: 'isActivated',
    created: 'created',
    updated: 'updated',
    deleted: 'deleted',
    account: 'account'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Friends_relationshipType'
   */
  export type EnumFriends_relationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Friends_relationshipType'>
    


  /**
   * Reference to a field of type 'Friends_relationshipType[]'
   */
  export type ListEnumFriends_relationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Friends_relationshipType[]'>
    


  /**
   * Reference to a field of type 'Friends_status'
   */
  export type EnumFriends_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Friends_status'>
    


  /**
   * Reference to a field of type 'Friends_status[]'
   */
  export type ListEnumFriends_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Friends_status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Message_fileType'
   */
  export type EnumMessage_fileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Message_fileType'>
    


  /**
   * Reference to a field of type 'Message_fileType[]'
   */
  export type ListEnumMessage_fileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Message_fileType[]'>
    


  /**
   * Reference to a field of type 'Message_status'
   */
  export type EnumMessage_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Message_status'>
    


  /**
   * Reference to a field of type 'Message_status[]'
   */
  export type ListEnumMessage_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Message_status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Request_status'
   */
  export type EnumRequest_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Request_status'>
    


  /**
   * Reference to a field of type 'Request_status[]'
   */
  export type ListEnumRequest_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Request_status[]'>
    


  /**
   * Reference to a field of type 'User_status'
   */
  export type EnumUser_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_status'>
    


  /**
   * Reference to a field of type 'User_status[]'
   */
  export type ListEnumUser_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_status[]'>
    


  /**
   * Reference to a field of type 'User_account'
   */
  export type EnumUser_accountFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_account'>
    


  /**
   * Reference to a field of type 'User_account[]'
   */
  export type ListEnumUser_accountFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_account[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    userOneId?: StringFilter<"ChatRoom"> | string
    userTwoId?: StringFilter<"ChatRoom"> | string
    unSeenMessageCount?: IntFilter<"ChatRoom"> | number
    lastMessageId?: StringNullableFilter<"ChatRoom"> | string | null
    lastMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    userOne?: XOR<UserScalarRelationFilter, UserWhereInput>
    userTwo?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
    Message?: MessageListRelationFilter
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    userOneId?: SortOrder
    userTwoId?: SortOrder
    unSeenMessageCount?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    lastMessage?: MessageOrderByWithRelationInput
    userOne?: UserOrderByWithRelationInput
    userTwo?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    Message?: MessageOrderByRelationAggregateInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lastMessageId?: string
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    userOneId?: StringFilter<"ChatRoom"> | string
    userTwoId?: StringFilter<"ChatRoom"> | string
    unSeenMessageCount?: IntFilter<"ChatRoom"> | number
    lastMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    userOne?: XOR<UserScalarRelationFilter, UserWhereInput>
    userTwo?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
    Message?: MessageListRelationFilter
  }, "id" | "lastMessageId">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    userOneId?: SortOrder
    userTwoId?: SortOrder
    unSeenMessageCount?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _avg?: ChatRoomAvgOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
    _sum?: ChatRoomSumOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatRoom"> | string
    userOneId?: StringWithAggregatesFilter<"ChatRoom"> | string
    userTwoId?: StringWithAggregatesFilter<"ChatRoom"> | string
    unSeenMessageCount?: IntWithAggregatesFilter<"ChatRoom"> | number
    lastMessageId?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
  }

  export type FriendsWhereInput = {
    AND?: FriendsWhereInput | FriendsWhereInput[]
    OR?: FriendsWhereInput[]
    NOT?: FriendsWhereInput | FriendsWhereInput[]
    id?: StringFilter<"Friends"> | string
    userId?: StringFilter<"Friends"> | string
    relatedUserId?: StringFilter<"Friends"> | string
    relationshipType?: EnumFriends_relationshipTypeFilter<"Friends"> | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFilter<"Friends"> | $Enums.Friends_status
    created?: DateTimeFilter<"Friends"> | Date | string
    updated?: DateTimeFilter<"Friends"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    relatedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedUserId?: SortOrder
    relationshipType?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    user?: UserOrderByWithRelationInput
    relatedUser?: UserOrderByWithRelationInput
  }

  export type FriendsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_relatedUserId?: FriendsUserIdRelatedUserIdCompoundUniqueInput
    AND?: FriendsWhereInput | FriendsWhereInput[]
    OR?: FriendsWhereInput[]
    NOT?: FriendsWhereInput | FriendsWhereInput[]
    userId?: StringFilter<"Friends"> | string
    relatedUserId?: StringFilter<"Friends"> | string
    relationshipType?: EnumFriends_relationshipTypeFilter<"Friends"> | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFilter<"Friends"> | $Enums.Friends_status
    created?: DateTimeFilter<"Friends"> | Date | string
    updated?: DateTimeFilter<"Friends"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    relatedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_relatedUserId">

  export type FriendsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedUserId?: SortOrder
    relationshipType?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: FriendsCountOrderByAggregateInput
    _max?: FriendsMaxOrderByAggregateInput
    _min?: FriendsMinOrderByAggregateInput
  }

  export type FriendsScalarWhereWithAggregatesInput = {
    AND?: FriendsScalarWhereWithAggregatesInput | FriendsScalarWhereWithAggregatesInput[]
    OR?: FriendsScalarWhereWithAggregatesInput[]
    NOT?: FriendsScalarWhereWithAggregatesInput | FriendsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friends"> | string
    userId?: StringWithAggregatesFilter<"Friends"> | string
    relatedUserId?: StringWithAggregatesFilter<"Friends"> | string
    relationshipType?: EnumFriends_relationshipTypeWithAggregatesFilter<"Friends"> | $Enums.Friends_relationshipType
    status?: EnumFriends_statusWithAggregatesFilter<"Friends"> | $Enums.Friends_status
    created?: DateTimeWithAggregatesFilter<"Friends"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Friends"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    file?: StringNullableFilter<"Message"> | string | null
    fileType?: EnumMessage_fileTypeNullableFilter<"Message"> | $Enums.Message_fileType | null
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    status?: EnumMessage_statusFilter<"Message"> | $Enums.Message_status
    created?: DateTimeFilter<"Message"> | Date | string
    updated?: DateTimeFilter<"Message"> | Date | string
    deleted?: BoolFilter<"Message"> | boolean
    chatRoomLast?: XOR<ChatRoomNullableScalarRelationFilter, ChatRoomWhereInput> | null
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    ChatRoom?: ChatRoomListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    fileType?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    chatId?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    deleted?: SortOrder
    chatRoomLast?: ChatRoomOrderByWithRelationInput
    chatRoom?: ChatRoomOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    ChatRoom?: ChatRoomOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringNullableFilter<"Message"> | string | null
    file?: StringNullableFilter<"Message"> | string | null
    fileType?: EnumMessage_fileTypeNullableFilter<"Message"> | $Enums.Message_fileType | null
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    status?: EnumMessage_statusFilter<"Message"> | $Enums.Message_status
    created?: DateTimeFilter<"Message"> | Date | string
    updated?: DateTimeFilter<"Message"> | Date | string
    deleted?: BoolFilter<"Message"> | boolean
    chatRoomLast?: XOR<ChatRoomNullableScalarRelationFilter, ChatRoomWhereInput> | null
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    ChatRoom?: ChatRoomListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    fileType?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    chatId?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    deleted?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringNullableWithAggregatesFilter<"Message"> | string | null
    file?: StringNullableWithAggregatesFilter<"Message"> | string | null
    fileType?: EnumMessage_fileTypeNullableWithAggregatesFilter<"Message"> | $Enums.Message_fileType | null
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    status?: EnumMessage_statusWithAggregatesFilter<"Message"> | $Enums.Message_status
    created?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    deleted?: BoolWithAggregatesFilter<"Message"> | boolean
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    senderId?: StringFilter<"Request"> | string
    friendId?: StringFilter<"Request"> | string
    status?: EnumRequest_statusFilter<"Request"> | $Enums.Request_status
    created?: DateTimeFilter<"Request"> | Date | string
    updated?: DateTimeFilter<"Request"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    sender?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    senderId_friendId?: RequestSenderIdFriendIdCompoundUniqueInput
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    senderId?: StringFilter<"Request"> | string
    friendId?: StringFilter<"Request"> | string
    status?: EnumRequest_statusFilter<"Request"> | $Enums.Request_status
    created?: DateTimeFilter<"Request"> | Date | string
    updated?: DateTimeFilter<"Request"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "senderId_friendId">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    senderId?: StringWithAggregatesFilter<"Request"> | string
    friendId?: StringWithAggregatesFilter<"Request"> | string
    status?: EnumRequest_statusWithAggregatesFilter<"Request"> | $Enums.Request_status
    created?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Request"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    device?: StringFilter<"Session"> | string
    userAgent?: StringFilter<"Session"> | string
    created?: DateTimeFilter<"Session"> | Date | string
    updated?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ip?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    device?: StringFilter<"Session"> | string
    userAgent?: StringFilter<"Session"> | string
    created?: DateTimeFilter<"Session"> | Date | string
    updated?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ip?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    ip?: StringWithAggregatesFilter<"Session"> | string
    device?: StringWithAggregatesFilter<"Session"> | string
    userAgent?: StringWithAggregatesFilter<"Session"> | string
    created?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    fullName?: StringNullableFilter<"User"> | string | null
    status?: EnumUser_statusFilter<"User"> | $Enums.User_status
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    isActivated?: BoolFilter<"User"> | boolean
    created?: DateTimeFilter<"User"> | Date | string
    updated?: DateTimeFilter<"User"> | Date | string
    deleted?: BoolFilter<"User"> | boolean
    account?: EnumUser_accountFilter<"User"> | $Enums.User_account
    chatRoomsOne?: ChatRoomListRelationFilter
    chatRoomsTwo?: ChatRoomListRelationFilter
    friends?: FriendsListRelationFilter
    relatedFriends?: FriendsListRelationFilter
    receivedMessages?: MessageListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedRequests?: RequestListRelationFilter
    sentRequests?: RequestListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    status?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    isActivated?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    deleted?: SortOrder
    account?: SortOrder
    chatRoomsOne?: ChatRoomOrderByRelationAggregateInput
    chatRoomsTwo?: ChatRoomOrderByRelationAggregateInput
    friends?: FriendsOrderByRelationAggregateInput
    relatedFriends?: FriendsOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedRequests?: RequestOrderByRelationAggregateInput
    sentRequests?: RequestOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringNullableFilter<"User"> | string | null
    status?: EnumUser_statusFilter<"User"> | $Enums.User_status
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    isActivated?: BoolFilter<"User"> | boolean
    created?: DateTimeFilter<"User"> | Date | string
    updated?: DateTimeFilter<"User"> | Date | string
    deleted?: BoolFilter<"User"> | boolean
    account?: EnumUser_accountFilter<"User"> | $Enums.User_account
    chatRoomsOne?: ChatRoomListRelationFilter
    chatRoomsTwo?: ChatRoomListRelationFilter
    friends?: FriendsListRelationFilter
    relatedFriends?: FriendsListRelationFilter
    receivedMessages?: MessageListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedRequests?: RequestListRelationFilter
    sentRequests?: RequestListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    status?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    isActivated?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    deleted?: SortOrder
    account?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUser_statusWithAggregatesFilter<"User"> | $Enums.User_status
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActivated?: BoolWithAggregatesFilter<"User"> | boolean
    created?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleted?: BoolWithAggregatesFilter<"User"> | boolean
    account?: EnumUser_accountWithAggregatesFilter<"User"> | $Enums.User_account
  }

  export type ChatRoomCreateInput = {
    id?: string
    unSeenMessageCount?: number
    lastMessage?: MessageCreateNestedOneWithoutChatRoomInput
    userOne: UserCreateNestedOneWithoutChatRoomsOneInput
    userTwo: UserCreateNestedOneWithoutChatRoomsTwoInput
    messages?: MessageCreateNestedManyWithoutChatRoomInput
    Message?: MessageCreateNestedManyWithoutChatRoomLastInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: string
    userOneId: string
    userTwoId: string
    unSeenMessageCount?: number
    lastMessageId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChatRoomInput
    Message?: MessageUncheckedCreateNestedManyWithoutChatRoomLastInput
  }

  export type ChatRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessage?: MessageUpdateOneWithoutChatRoomNestedInput
    userOne?: UserUpdateOneRequiredWithoutChatRoomsOneNestedInput
    userTwo?: UserUpdateOneRequiredWithoutChatRoomsTwoNestedInput
    messages?: MessageUpdateManyWithoutChatRoomNestedInput
    Message?: MessageUpdateManyWithoutChatRoomLastNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userOneId?: StringFieldUpdateOperationsInput | string
    userTwoId?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutChatRoomNestedInput
    Message?: MessageUncheckedUpdateManyWithoutChatRoomLastNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id?: string
    userOneId: string
    userTwoId: string
    unSeenMessageCount?: number
    lastMessageId?: string | null
  }

  export type ChatRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userOneId?: StringFieldUpdateOperationsInput | string
    userTwoId?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FriendsCreateInput = {
    id?: string
    relationshipType: $Enums.Friends_relationshipType
    status: $Enums.Friends_status
    created?: Date | string
    updated?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
    relatedUser: UserCreateNestedOneWithoutRelatedFriendsInput
  }

  export type FriendsUncheckedCreateInput = {
    id?: string
    userId: string
    relatedUserId: string
    relationshipType: $Enums.Friends_relationshipType
    status: $Enums.Friends_status
    created?: Date | string
    updated?: Date | string
  }

  export type FriendsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumFriends_relationshipTypeFieldUpdateOperationsInput | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFieldUpdateOperationsInput | $Enums.Friends_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
    relatedUser?: UserUpdateOneRequiredWithoutRelatedFriendsNestedInput
  }

  export type FriendsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    relatedUserId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumFriends_relationshipTypeFieldUpdateOperationsInput | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFieldUpdateOperationsInput | $Enums.Friends_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsCreateManyInput = {
    id?: string
    userId: string
    relatedUserId: string
    relationshipType: $Enums.Friends_relationshipType
    status: $Enums.Friends_status
    created?: Date | string
    updated?: Date | string
  }

  export type FriendsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumFriends_relationshipTypeFieldUpdateOperationsInput | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFieldUpdateOperationsInput | $Enums.Friends_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    relatedUserId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumFriends_relationshipTypeFieldUpdateOperationsInput | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFieldUpdateOperationsInput | $Enums.Friends_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    chatRoomLast?: ChatRoomCreateNestedOneWithoutMessageInput
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
    ChatRoom?: ChatRoomCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    senderId: string
    receiverId: string
    chatId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    ChatRoom?: ChatRoomUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    chatRoomLast?: ChatRoomUpdateOneWithoutMessageNestedInput
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    ChatRoom?: ChatRoomUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    ChatRoom?: ChatRoomUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    senderId: string
    receiverId: string
    chatId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
  }

  export type MessageUpdateManyMutationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RequestCreateInput = {
    id?: string
    status?: $Enums.Request_status
    created?: Date | string
    updated?: Date | string
    sender: UserCreateNestedOneWithoutSentRequestsInput
    friend: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    senderId: string
    friendId: string
    status?: $Enums.Request_status
    created?: Date | string
    updated?: Date | string
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequest_statusFieldUpdateOperationsInput | $Enums.Request_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
    friend?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequest_statusFieldUpdateOperationsInput | $Enums.Request_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateManyInput = {
    id?: string
    senderId: string
    friendId: string
    status?: $Enums.Request_status
    created?: Date | string
    updated?: Date | string
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequest_statusFieldUpdateOperationsInput | $Enums.Request_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequest_statusFieldUpdateOperationsInput | $Enums.Request_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    ip: string
    device: string
    userAgent: string
    created?: Date | string
    updated?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    ip: string
    device: string
    userAgent: string
    created?: Date | string
    updated?: Date | string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    ip: string
    device: string
    userAgent: string
    created?: Date | string
    updated?: Date | string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomCreateNestedManyWithoutUserTwoInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutFriendInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomUncheckedCreateNestedManyWithoutUserTwoInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsUncheckedCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutFriendInput
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUncheckedUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUncheckedUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MessageNullableScalarRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    userOneId?: SortOrder
    userTwoId?: SortOrder
    unSeenMessageCount?: SortOrder
    lastMessageId?: SortOrder
  }

  export type ChatRoomAvgOrderByAggregateInput = {
    unSeenMessageCount?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    userOneId?: SortOrder
    userTwoId?: SortOrder
    unSeenMessageCount?: SortOrder
    lastMessageId?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    userOneId?: SortOrder
    userTwoId?: SortOrder
    unSeenMessageCount?: SortOrder
    lastMessageId?: SortOrder
  }

  export type ChatRoomSumOrderByAggregateInput = {
    unSeenMessageCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumFriends_relationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Friends_relationshipType | EnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Friends_relationshipType[] | ListEnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Friends_relationshipType[] | ListEnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFriends_relationshipTypeFilter<$PrismaModel> | $Enums.Friends_relationshipType
  }

  export type EnumFriends_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Friends_status | EnumFriends_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Friends_status[] | ListEnumFriends_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Friends_status[] | ListEnumFriends_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriends_statusFilter<$PrismaModel> | $Enums.Friends_status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FriendsUserIdRelatedUserIdCompoundUniqueInput = {
    userId: string
    relatedUserId: string
  }

  export type FriendsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedUserId?: SortOrder
    relationshipType?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type FriendsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedUserId?: SortOrder
    relationshipType?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type FriendsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedUserId?: SortOrder
    relationshipType?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type EnumFriends_relationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Friends_relationshipType | EnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Friends_relationshipType[] | ListEnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Friends_relationshipType[] | ListEnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFriends_relationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.Friends_relationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriends_relationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumFriends_relationshipTypeFilter<$PrismaModel>
  }

  export type EnumFriends_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Friends_status | EnumFriends_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Friends_status[] | ListEnumFriends_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Friends_status[] | ListEnumFriends_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriends_statusWithAggregatesFilter<$PrismaModel> | $Enums.Friends_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriends_statusFilter<$PrismaModel>
    _max?: NestedEnumFriends_statusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMessage_fileTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Message_fileType | EnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Message_fileType[] | ListEnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Message_fileType[] | ListEnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessage_fileTypeNullableFilter<$PrismaModel> | $Enums.Message_fileType | null
  }

  export type EnumMessage_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Message_status | EnumMessage_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Message_status[] | ListEnumMessage_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Message_status[] | ListEnumMessage_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessage_statusFilter<$PrismaModel> | $Enums.Message_status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChatRoomNullableScalarRelationFilter = {
    is?: ChatRoomWhereInput | null
    isNot?: ChatRoomWhereInput | null
  }

  export type ChatRoomScalarRelationFilter = {
    is?: ChatRoomWhereInput
    isNot?: ChatRoomWhereInput
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    file?: SortOrder
    fileType?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    chatId?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    deleted?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    file?: SortOrder
    fileType?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    chatId?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    deleted?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    file?: SortOrder
    fileType?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    chatId?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    deleted?: SortOrder
  }

  export type EnumMessage_fileTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Message_fileType | EnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Message_fileType[] | ListEnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Message_fileType[] | ListEnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessage_fileTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Message_fileType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMessage_fileTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMessage_fileTypeNullableFilter<$PrismaModel>
  }

  export type EnumMessage_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Message_status | EnumMessage_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Message_status[] | ListEnumMessage_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Message_status[] | ListEnumMessage_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessage_statusWithAggregatesFilter<$PrismaModel> | $Enums.Message_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessage_statusFilter<$PrismaModel>
    _max?: NestedEnumMessage_statusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRequest_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Request_status | EnumRequest_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Request_status[] | ListEnumRequest_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Request_status[] | ListEnumRequest_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequest_statusFilter<$PrismaModel> | $Enums.Request_status
  }

  export type RequestSenderIdFriendIdCompoundUniqueInput = {
    senderId: string
    friendId: string
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type EnumRequest_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Request_status | EnumRequest_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Request_status[] | ListEnumRequest_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Request_status[] | ListEnumRequest_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequest_statusWithAggregatesFilter<$PrismaModel> | $Enums.Request_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequest_statusFilter<$PrismaModel>
    _max?: NestedEnumRequest_statusFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ip?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ip?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ip?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    expiresAt?: SortOrder
  }

  export type EnumUser_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.User_status | EnumUser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.User_status[] | ListEnumUser_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_status[] | ListEnumUser_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_statusFilter<$PrismaModel> | $Enums.User_status
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUser_accountFilter<$PrismaModel = never> = {
    equals?: $Enums.User_account | EnumUser_accountFieldRefInput<$PrismaModel>
    in?: $Enums.User_account[] | ListEnumUser_accountFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_account[] | ListEnumUser_accountFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_accountFilter<$PrismaModel> | $Enums.User_account
  }

  export type FriendsListRelationFilter = {
    every?: FriendsWhereInput
    some?: FriendsWhereInput
    none?: FriendsWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type FriendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    password?: SortOrder
    image?: SortOrder
    isActivated?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    deleted?: SortOrder
    account?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    password?: SortOrder
    image?: SortOrder
    isActivated?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    deleted?: SortOrder
    account?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    password?: SortOrder
    image?: SortOrder
    isActivated?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    deleted?: SortOrder
    account?: SortOrder
  }

  export type EnumUser_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_status | EnumUser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.User_status[] | ListEnumUser_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_status[] | ListEnumUser_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_statusWithAggregatesFilter<$PrismaModel> | $Enums.User_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUser_statusFilter<$PrismaModel>
    _max?: NestedEnumUser_statusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUser_accountWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_account | EnumUser_accountFieldRefInput<$PrismaModel>
    in?: $Enums.User_account[] | ListEnumUser_accountFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_account[] | ListEnumUser_accountFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_accountWithAggregatesFilter<$PrismaModel> | $Enums.User_account
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUser_accountFilter<$PrismaModel>
    _max?: NestedEnumUser_accountFilter<$PrismaModel>
  }

  export type MessageCreateNestedOneWithoutChatRoomInput = {
    create?: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatRoomsOneInput = {
    create?: XOR<UserCreateWithoutChatRoomsOneInput, UserUncheckedCreateWithoutChatRoomsOneInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsOneInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatRoomsTwoInput = {
    create?: XOR<UserCreateWithoutChatRoomsTwoInput, UserUncheckedCreateWithoutChatRoomsTwoInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsTwoInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput> | MessageCreateWithoutChatRoomInput[] | MessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomInput | MessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: MessageCreateManyChatRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutChatRoomLastInput = {
    create?: XOR<MessageCreateWithoutChatRoomLastInput, MessageUncheckedCreateWithoutChatRoomLastInput> | MessageCreateWithoutChatRoomLastInput[] | MessageUncheckedCreateWithoutChatRoomLastInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomLastInput | MessageCreateOrConnectWithoutChatRoomLastInput[]
    createMany?: MessageCreateManyChatRoomLastInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput> | MessageCreateWithoutChatRoomInput[] | MessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomInput | MessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: MessageCreateManyChatRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatRoomLastInput = {
    create?: XOR<MessageCreateWithoutChatRoomLastInput, MessageUncheckedCreateWithoutChatRoomLastInput> | MessageCreateWithoutChatRoomLastInput[] | MessageUncheckedCreateWithoutChatRoomLastInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomLastInput | MessageCreateOrConnectWithoutChatRoomLastInput[]
    createMany?: MessageCreateManyChatRoomLastInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MessageUpdateOneWithoutChatRoomNestedInput = {
    create?: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomInput
    upsert?: MessageUpsertWithoutChatRoomInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutChatRoomInput, MessageUpdateWithoutChatRoomInput>, MessageUncheckedUpdateWithoutChatRoomInput>
  }

  export type UserUpdateOneRequiredWithoutChatRoomsOneNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomsOneInput, UserUncheckedCreateWithoutChatRoomsOneInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsOneInput
    upsert?: UserUpsertWithoutChatRoomsOneInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatRoomsOneInput, UserUpdateWithoutChatRoomsOneInput>, UserUncheckedUpdateWithoutChatRoomsOneInput>
  }

  export type UserUpdateOneRequiredWithoutChatRoomsTwoNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomsTwoInput, UserUncheckedCreateWithoutChatRoomsTwoInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsTwoInput
    upsert?: UserUpsertWithoutChatRoomsTwoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatRoomsTwoInput, UserUpdateWithoutChatRoomsTwoInput>, UserUncheckedUpdateWithoutChatRoomsTwoInput>
  }

  export type MessageUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput> | MessageCreateWithoutChatRoomInput[] | MessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomInput | MessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatRoomInput | MessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: MessageCreateManyChatRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatRoomInput | MessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatRoomInput | MessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutChatRoomLastNestedInput = {
    create?: XOR<MessageCreateWithoutChatRoomLastInput, MessageUncheckedCreateWithoutChatRoomLastInput> | MessageCreateWithoutChatRoomLastInput[] | MessageUncheckedCreateWithoutChatRoomLastInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomLastInput | MessageCreateOrConnectWithoutChatRoomLastInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatRoomLastInput | MessageUpsertWithWhereUniqueWithoutChatRoomLastInput[]
    createMany?: MessageCreateManyChatRoomLastInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatRoomLastInput | MessageUpdateWithWhereUniqueWithoutChatRoomLastInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatRoomLastInput | MessageUpdateManyWithWhereWithoutChatRoomLastInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MessageUncheckedUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput> | MessageCreateWithoutChatRoomInput[] | MessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomInput | MessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatRoomInput | MessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: MessageCreateManyChatRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatRoomInput | MessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatRoomInput | MessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatRoomLastNestedInput = {
    create?: XOR<MessageCreateWithoutChatRoomLastInput, MessageUncheckedCreateWithoutChatRoomLastInput> | MessageCreateWithoutChatRoomLastInput[] | MessageUncheckedCreateWithoutChatRoomLastInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomLastInput | MessageCreateOrConnectWithoutChatRoomLastInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatRoomLastInput | MessageUpsertWithWhereUniqueWithoutChatRoomLastInput[]
    createMany?: MessageCreateManyChatRoomLastInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatRoomLastInput | MessageUpdateWithWhereUniqueWithoutChatRoomLastInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatRoomLastInput | MessageUpdateManyWithWhereWithoutChatRoomLastInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRelatedFriendsInput = {
    create?: XOR<UserCreateWithoutRelatedFriendsInput, UserUncheckedCreateWithoutRelatedFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRelatedFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFriends_relationshipTypeFieldUpdateOperationsInput = {
    set?: $Enums.Friends_relationshipType
  }

  export type EnumFriends_statusFieldUpdateOperationsInput = {
    set?: $Enums.Friends_status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutRelatedFriendsNestedInput = {
    create?: XOR<UserCreateWithoutRelatedFriendsInput, UserUncheckedCreateWithoutRelatedFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRelatedFriendsInput
    upsert?: UserUpsertWithoutRelatedFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRelatedFriendsInput, UserUpdateWithoutRelatedFriendsInput>, UserUncheckedUpdateWithoutRelatedFriendsInput>
  }

  export type ChatRoomCreateNestedOneWithoutMessageInput = {
    create?: XOR<ChatRoomCreateWithoutMessageInput, ChatRoomUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessageInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type ChatRoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatRoomCreateNestedManyWithoutLastMessageInput = {
    create?: XOR<ChatRoomCreateWithoutLastMessageInput, ChatRoomUncheckedCreateWithoutLastMessageInput> | ChatRoomCreateWithoutLastMessageInput[] | ChatRoomUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutLastMessageInput | ChatRoomCreateOrConnectWithoutLastMessageInput[]
    createMany?: ChatRoomCreateManyLastMessageInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutLastMessageInput = {
    create?: XOR<ChatRoomCreateWithoutLastMessageInput, ChatRoomUncheckedCreateWithoutLastMessageInput> | ChatRoomCreateWithoutLastMessageInput[] | ChatRoomUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutLastMessageInput | ChatRoomCreateOrConnectWithoutLastMessageInput[]
    createMany?: ChatRoomCreateManyLastMessageInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type NullableEnumMessage_fileTypeFieldUpdateOperationsInput = {
    set?: $Enums.Message_fileType | null
  }

  export type EnumMessage_statusFieldUpdateOperationsInput = {
    set?: $Enums.Message_status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChatRoomUpdateOneWithoutMessageNestedInput = {
    create?: XOR<ChatRoomCreateWithoutMessageInput, ChatRoomUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessageInput
    upsert?: ChatRoomUpsertWithoutMessageInput
    disconnect?: ChatRoomWhereInput | boolean
    delete?: ChatRoomWhereInput | boolean
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutMessageInput, ChatRoomUpdateWithoutMessageInput>, ChatRoomUncheckedUpdateWithoutMessageInput>
  }

  export type ChatRoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    upsert?: ChatRoomUpsertWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutMessagesInput, ChatRoomUpdateWithoutMessagesInput>, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type ChatRoomUpdateManyWithoutLastMessageNestedInput = {
    create?: XOR<ChatRoomCreateWithoutLastMessageInput, ChatRoomUncheckedCreateWithoutLastMessageInput> | ChatRoomCreateWithoutLastMessageInput[] | ChatRoomUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutLastMessageInput | ChatRoomCreateOrConnectWithoutLastMessageInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutLastMessageInput | ChatRoomUpsertWithWhereUniqueWithoutLastMessageInput[]
    createMany?: ChatRoomCreateManyLastMessageInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutLastMessageInput | ChatRoomUpdateWithWhereUniqueWithoutLastMessageInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutLastMessageInput | ChatRoomUpdateManyWithWhereWithoutLastMessageInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutLastMessageNestedInput = {
    create?: XOR<ChatRoomCreateWithoutLastMessageInput, ChatRoomUncheckedCreateWithoutLastMessageInput> | ChatRoomCreateWithoutLastMessageInput[] | ChatRoomUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutLastMessageInput | ChatRoomCreateOrConnectWithoutLastMessageInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutLastMessageInput | ChatRoomUpsertWithWhereUniqueWithoutLastMessageInput[]
    createMany?: ChatRoomCreateManyLastMessageInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutLastMessageInput | ChatRoomUpdateWithWhereUniqueWithoutLastMessageInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutLastMessageInput | ChatRoomUpdateManyWithWhereWithoutLastMessageInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentRequestsInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequest_statusFieldUpdateOperationsInput = {
    set?: $Enums.Request_status
  }

  export type UserUpdateOneRequiredWithoutSentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    upsert?: UserUpsertWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRequestsInput, UserUpdateWithoutSentRequestsInput>, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    upsert?: UserUpsertWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRequestsInput, UserUpdateWithoutReceivedRequestsInput>, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ChatRoomCreateNestedManyWithoutUserOneInput = {
    create?: XOR<ChatRoomCreateWithoutUserOneInput, ChatRoomUncheckedCreateWithoutUserOneInput> | ChatRoomCreateWithoutUserOneInput[] | ChatRoomUncheckedCreateWithoutUserOneInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserOneInput | ChatRoomCreateOrConnectWithoutUserOneInput[]
    createMany?: ChatRoomCreateManyUserOneInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutUserTwoInput = {
    create?: XOR<ChatRoomCreateWithoutUserTwoInput, ChatRoomUncheckedCreateWithoutUserTwoInput> | ChatRoomCreateWithoutUserTwoInput[] | ChatRoomUncheckedCreateWithoutUserTwoInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserTwoInput | ChatRoomCreateOrConnectWithoutUserTwoInput[]
    createMany?: ChatRoomCreateManyUserTwoInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type FriendsCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type FriendsCreateNestedManyWithoutRelatedUserInput = {
    create?: XOR<FriendsCreateWithoutRelatedUserInput, FriendsUncheckedCreateWithoutRelatedUserInput> | FriendsCreateWithoutRelatedUserInput[] | FriendsUncheckedCreateWithoutRelatedUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutRelatedUserInput | FriendsCreateOrConnectWithoutRelatedUserInput[]
    createMany?: FriendsCreateManyRelatedUserInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutFriendInput = {
    create?: XOR<RequestCreateWithoutFriendInput, RequestUncheckedCreateWithoutFriendInput> | RequestCreateWithoutFriendInput[] | RequestUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutFriendInput | RequestCreateOrConnectWithoutFriendInput[]
    createMany?: RequestCreateManyFriendInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutSenderInput = {
    create?: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput> | RequestCreateWithoutSenderInput[] | RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSenderInput | RequestCreateOrConnectWithoutSenderInput[]
    createMany?: RequestCreateManySenderInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutUserOneInput = {
    create?: XOR<ChatRoomCreateWithoutUserOneInput, ChatRoomUncheckedCreateWithoutUserOneInput> | ChatRoomCreateWithoutUserOneInput[] | ChatRoomUncheckedCreateWithoutUserOneInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserOneInput | ChatRoomCreateOrConnectWithoutUserOneInput[]
    createMany?: ChatRoomCreateManyUserOneInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutUserTwoInput = {
    create?: XOR<ChatRoomCreateWithoutUserTwoInput, ChatRoomUncheckedCreateWithoutUserTwoInput> | ChatRoomCreateWithoutUserTwoInput[] | ChatRoomUncheckedCreateWithoutUserTwoInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserTwoInput | ChatRoomCreateOrConnectWithoutUserTwoInput[]
    createMany?: ChatRoomCreateManyUserTwoInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type FriendsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type FriendsUncheckedCreateNestedManyWithoutRelatedUserInput = {
    create?: XOR<FriendsCreateWithoutRelatedUserInput, FriendsUncheckedCreateWithoutRelatedUserInput> | FriendsCreateWithoutRelatedUserInput[] | FriendsUncheckedCreateWithoutRelatedUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutRelatedUserInput | FriendsCreateOrConnectWithoutRelatedUserInput[]
    createMany?: FriendsCreateManyRelatedUserInputEnvelope
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<RequestCreateWithoutFriendInput, RequestUncheckedCreateWithoutFriendInput> | RequestCreateWithoutFriendInput[] | RequestUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutFriendInput | RequestCreateOrConnectWithoutFriendInput[]
    createMany?: RequestCreateManyFriendInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput> | RequestCreateWithoutSenderInput[] | RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSenderInput | RequestCreateOrConnectWithoutSenderInput[]
    createMany?: RequestCreateManySenderInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnumUser_statusFieldUpdateOperationsInput = {
    set?: $Enums.User_status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUser_accountFieldUpdateOperationsInput = {
    set?: $Enums.User_account
  }

  export type ChatRoomUpdateManyWithoutUserOneNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserOneInput, ChatRoomUncheckedCreateWithoutUserOneInput> | ChatRoomCreateWithoutUserOneInput[] | ChatRoomUncheckedCreateWithoutUserOneInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserOneInput | ChatRoomCreateOrConnectWithoutUserOneInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserOneInput | ChatRoomUpsertWithWhereUniqueWithoutUserOneInput[]
    createMany?: ChatRoomCreateManyUserOneInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserOneInput | ChatRoomUpdateWithWhereUniqueWithoutUserOneInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserOneInput | ChatRoomUpdateManyWithWhereWithoutUserOneInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutUserTwoNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserTwoInput, ChatRoomUncheckedCreateWithoutUserTwoInput> | ChatRoomCreateWithoutUserTwoInput[] | ChatRoomUncheckedCreateWithoutUserTwoInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserTwoInput | ChatRoomCreateOrConnectWithoutUserTwoInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserTwoInput | ChatRoomUpsertWithWhereUniqueWithoutUserTwoInput[]
    createMany?: ChatRoomCreateManyUserTwoInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserTwoInput | ChatRoomUpdateWithWhereUniqueWithoutUserTwoInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserTwoInput | ChatRoomUpdateManyWithWhereWithoutUserTwoInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type FriendsUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutUserInput | FriendsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutUserInput | FriendsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutUserInput | FriendsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type FriendsUpdateManyWithoutRelatedUserNestedInput = {
    create?: XOR<FriendsCreateWithoutRelatedUserInput, FriendsUncheckedCreateWithoutRelatedUserInput> | FriendsCreateWithoutRelatedUserInput[] | FriendsUncheckedCreateWithoutRelatedUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutRelatedUserInput | FriendsCreateOrConnectWithoutRelatedUserInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutRelatedUserInput | FriendsUpsertWithWhereUniqueWithoutRelatedUserInput[]
    createMany?: FriendsCreateManyRelatedUserInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutRelatedUserInput | FriendsUpdateWithWhereUniqueWithoutRelatedUserInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutRelatedUserInput | FriendsUpdateManyWithWhereWithoutRelatedUserInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutFriendNestedInput = {
    create?: XOR<RequestCreateWithoutFriendInput, RequestUncheckedCreateWithoutFriendInput> | RequestCreateWithoutFriendInput[] | RequestUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutFriendInput | RequestCreateOrConnectWithoutFriendInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutFriendInput | RequestUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: RequestCreateManyFriendInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutFriendInput | RequestUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutFriendInput | RequestUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutSenderNestedInput = {
    create?: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput> | RequestCreateWithoutSenderInput[] | RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSenderInput | RequestCreateOrConnectWithoutSenderInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutSenderInput | RequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: RequestCreateManySenderInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutSenderInput | RequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutSenderInput | RequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserOneNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserOneInput, ChatRoomUncheckedCreateWithoutUserOneInput> | ChatRoomCreateWithoutUserOneInput[] | ChatRoomUncheckedCreateWithoutUserOneInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserOneInput | ChatRoomCreateOrConnectWithoutUserOneInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserOneInput | ChatRoomUpsertWithWhereUniqueWithoutUserOneInput[]
    createMany?: ChatRoomCreateManyUserOneInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserOneInput | ChatRoomUpdateWithWhereUniqueWithoutUserOneInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserOneInput | ChatRoomUpdateManyWithWhereWithoutUserOneInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserTwoNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserTwoInput, ChatRoomUncheckedCreateWithoutUserTwoInput> | ChatRoomCreateWithoutUserTwoInput[] | ChatRoomUncheckedCreateWithoutUserTwoInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserTwoInput | ChatRoomCreateOrConnectWithoutUserTwoInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserTwoInput | ChatRoomUpsertWithWhereUniqueWithoutUserTwoInput[]
    createMany?: ChatRoomCreateManyUserTwoInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserTwoInput | ChatRoomUpdateWithWhereUniqueWithoutUserTwoInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserTwoInput | ChatRoomUpdateManyWithWhereWithoutUserTwoInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type FriendsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput> | FriendsCreateWithoutUserInput[] | FriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutUserInput | FriendsCreateOrConnectWithoutUserInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutUserInput | FriendsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendsCreateManyUserInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutUserInput | FriendsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutUserInput | FriendsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type FriendsUncheckedUpdateManyWithoutRelatedUserNestedInput = {
    create?: XOR<FriendsCreateWithoutRelatedUserInput, FriendsUncheckedCreateWithoutRelatedUserInput> | FriendsCreateWithoutRelatedUserInput[] | FriendsUncheckedCreateWithoutRelatedUserInput[]
    connectOrCreate?: FriendsCreateOrConnectWithoutRelatedUserInput | FriendsCreateOrConnectWithoutRelatedUserInput[]
    upsert?: FriendsUpsertWithWhereUniqueWithoutRelatedUserInput | FriendsUpsertWithWhereUniqueWithoutRelatedUserInput[]
    createMany?: FriendsCreateManyRelatedUserInputEnvelope
    set?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    disconnect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    delete?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    connect?: FriendsWhereUniqueInput | FriendsWhereUniqueInput[]
    update?: FriendsUpdateWithWhereUniqueWithoutRelatedUserInput | FriendsUpdateWithWhereUniqueWithoutRelatedUserInput[]
    updateMany?: FriendsUpdateManyWithWhereWithoutRelatedUserInput | FriendsUpdateManyWithWhereWithoutRelatedUserInput[]
    deleteMany?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<RequestCreateWithoutFriendInput, RequestUncheckedCreateWithoutFriendInput> | RequestCreateWithoutFriendInput[] | RequestUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutFriendInput | RequestCreateOrConnectWithoutFriendInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutFriendInput | RequestUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: RequestCreateManyFriendInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutFriendInput | RequestUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutFriendInput | RequestUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput> | RequestCreateWithoutSenderInput[] | RequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutSenderInput | RequestCreateOrConnectWithoutSenderInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutSenderInput | RequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: RequestCreateManySenderInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutSenderInput | RequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutSenderInput | RequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFriends_relationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Friends_relationshipType | EnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Friends_relationshipType[] | ListEnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Friends_relationshipType[] | ListEnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFriends_relationshipTypeFilter<$PrismaModel> | $Enums.Friends_relationshipType
  }

  export type NestedEnumFriends_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Friends_status | EnumFriends_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Friends_status[] | ListEnumFriends_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Friends_status[] | ListEnumFriends_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriends_statusFilter<$PrismaModel> | $Enums.Friends_status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumFriends_relationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Friends_relationshipType | EnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Friends_relationshipType[] | ListEnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Friends_relationshipType[] | ListEnumFriends_relationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFriends_relationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.Friends_relationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriends_relationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumFriends_relationshipTypeFilter<$PrismaModel>
  }

  export type NestedEnumFriends_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Friends_status | EnumFriends_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Friends_status[] | ListEnumFriends_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Friends_status[] | ListEnumFriends_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriends_statusWithAggregatesFilter<$PrismaModel> | $Enums.Friends_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriends_statusFilter<$PrismaModel>
    _max?: NestedEnumFriends_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMessage_fileTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Message_fileType | EnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Message_fileType[] | ListEnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Message_fileType[] | ListEnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessage_fileTypeNullableFilter<$PrismaModel> | $Enums.Message_fileType | null
  }

  export type NestedEnumMessage_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Message_status | EnumMessage_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Message_status[] | ListEnumMessage_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Message_status[] | ListEnumMessage_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessage_statusFilter<$PrismaModel> | $Enums.Message_status
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumMessage_fileTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Message_fileType | EnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Message_fileType[] | ListEnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Message_fileType[] | ListEnumMessage_fileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessage_fileTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Message_fileType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMessage_fileTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMessage_fileTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMessage_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Message_status | EnumMessage_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Message_status[] | ListEnumMessage_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Message_status[] | ListEnumMessage_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessage_statusWithAggregatesFilter<$PrismaModel> | $Enums.Message_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessage_statusFilter<$PrismaModel>
    _max?: NestedEnumMessage_statusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRequest_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Request_status | EnumRequest_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Request_status[] | ListEnumRequest_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Request_status[] | ListEnumRequest_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequest_statusFilter<$PrismaModel> | $Enums.Request_status
  }

  export type NestedEnumRequest_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Request_status | EnumRequest_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Request_status[] | ListEnumRequest_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Request_status[] | ListEnumRequest_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequest_statusWithAggregatesFilter<$PrismaModel> | $Enums.Request_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequest_statusFilter<$PrismaModel>
    _max?: NestedEnumRequest_statusFilter<$PrismaModel>
  }

  export type NestedEnumUser_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.User_status | EnumUser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.User_status[] | ListEnumUser_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_status[] | ListEnumUser_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_statusFilter<$PrismaModel> | $Enums.User_status
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUser_accountFilter<$PrismaModel = never> = {
    equals?: $Enums.User_account | EnumUser_accountFieldRefInput<$PrismaModel>
    in?: $Enums.User_account[] | ListEnumUser_accountFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_account[] | ListEnumUser_accountFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_accountFilter<$PrismaModel> | $Enums.User_account
  }

  export type NestedEnumUser_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_status | EnumUser_statusFieldRefInput<$PrismaModel>
    in?: $Enums.User_status[] | ListEnumUser_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_status[] | ListEnumUser_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_statusWithAggregatesFilter<$PrismaModel> | $Enums.User_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUser_statusFilter<$PrismaModel>
    _max?: NestedEnumUser_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUser_accountWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_account | EnumUser_accountFieldRefInput<$PrismaModel>
    in?: $Enums.User_account[] | ListEnumUser_accountFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_account[] | ListEnumUser_accountFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_accountWithAggregatesFilter<$PrismaModel> | $Enums.User_account
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUser_accountFilter<$PrismaModel>
    _max?: NestedEnumUser_accountFilter<$PrismaModel>
  }

  export type MessageCreateWithoutChatRoomInput = {
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    chatRoomLast?: ChatRoomCreateNestedOneWithoutMessageInput
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatRoomInput = {
    id?: string
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    senderId: string
    receiverId: string
    chatId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
  }

  export type MessageCreateOrConnectWithoutChatRoomInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput>
  }

  export type UserCreateWithoutChatRoomsOneInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsTwo?: ChatRoomCreateNestedManyWithoutUserTwoInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutFriendInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatRoomsOneInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsTwo?: ChatRoomUncheckedCreateNestedManyWithoutUserTwoInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsUncheckedCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutFriendInput
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatRoomsOneInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomsOneInput, UserUncheckedCreateWithoutChatRoomsOneInput>
  }

  export type UserCreateWithoutChatRoomsTwoInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomCreateNestedManyWithoutUserOneInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutFriendInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatRoomsTwoInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedCreateNestedManyWithoutUserOneInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsUncheckedCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutFriendInput
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatRoomsTwoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomsTwoInput, UserUncheckedCreateWithoutChatRoomsTwoInput>
  }

  export type MessageCreateWithoutChatRoomInput = {
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    chatRoomLast?: ChatRoomCreateNestedOneWithoutMessageInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
    ChatRoom?: ChatRoomCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateWithoutChatRoomInput = {
    id?: string
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    senderId: string
    receiverId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    ChatRoom?: ChatRoomUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageCreateManyChatRoomInputEnvelope = {
    data: MessageCreateManyChatRoomInput | MessageCreateManyChatRoomInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutChatRoomLastInput = {
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
    ChatRoom?: ChatRoomCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateWithoutChatRoomLastInput = {
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    senderId: string
    receiverId: string
    chatId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    ChatRoom?: ChatRoomUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageCreateOrConnectWithoutChatRoomLastInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatRoomLastInput, MessageUncheckedCreateWithoutChatRoomLastInput>
  }

  export type MessageCreateManyChatRoomLastInputEnvelope = {
    data: MessageCreateManyChatRoomLastInput | MessageCreateManyChatRoomLastInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithoutChatRoomInput = {
    update: XOR<MessageUpdateWithoutChatRoomInput, MessageUncheckedUpdateWithoutChatRoomInput>
    create: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutChatRoomInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutChatRoomInput, MessageUncheckedUpdateWithoutChatRoomInput>
  }

  export type MessageUpdateWithoutChatRoomInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    chatRoomLast?: ChatRoomUpdateOneWithoutMessageNestedInput
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutChatRoomsOneInput = {
    update: XOR<UserUpdateWithoutChatRoomsOneInput, UserUncheckedUpdateWithoutChatRoomsOneInput>
    create: XOR<UserCreateWithoutChatRoomsOneInput, UserUncheckedCreateWithoutChatRoomsOneInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatRoomsOneInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatRoomsOneInput, UserUncheckedUpdateWithoutChatRoomsOneInput>
  }

  export type UserUpdateWithoutChatRoomsOneInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsTwo?: ChatRoomUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomsOneInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsTwo?: ChatRoomUncheckedUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUncheckedUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutChatRoomsTwoInput = {
    update: XOR<UserUpdateWithoutChatRoomsTwoInput, UserUncheckedUpdateWithoutChatRoomsTwoInput>
    create: XOR<UserCreateWithoutChatRoomsTwoInput, UserUncheckedCreateWithoutChatRoomsTwoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatRoomsTwoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatRoomsTwoInput, UserUncheckedUpdateWithoutChatRoomsTwoInput>
  }

  export type UserUpdateWithoutChatRoomsTwoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUpdateManyWithoutUserOneNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomsTwoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedUpdateManyWithoutUserOneNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUncheckedUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatRoomInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatRoomInput, MessageUncheckedUpdateWithoutChatRoomInput>
    create: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatRoomInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatRoomInput, MessageUncheckedUpdateWithoutChatRoomInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatRoomInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatRoomInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    file?: StringNullableFilter<"Message"> | string | null
    fileType?: EnumMessage_fileTypeNullableFilter<"Message"> | $Enums.Message_fileType | null
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    status?: EnumMessage_statusFilter<"Message"> | $Enums.Message_status
    created?: DateTimeFilter<"Message"> | Date | string
    updated?: DateTimeFilter<"Message"> | Date | string
    deleted?: BoolFilter<"Message"> | boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutChatRoomLastInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatRoomLastInput, MessageUncheckedUpdateWithoutChatRoomLastInput>
    create: XOR<MessageCreateWithoutChatRoomLastInput, MessageUncheckedCreateWithoutChatRoomLastInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatRoomLastInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatRoomLastInput, MessageUncheckedUpdateWithoutChatRoomLastInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatRoomLastInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatRoomLastInput>
  }

  export type UserCreateWithoutFriendsInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomCreateNestedManyWithoutUserTwoInput
    relatedFriends?: FriendsCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutFriendInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomUncheckedCreateNestedManyWithoutUserTwoInput
    relatedFriends?: FriendsUncheckedCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutFriendInput
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserCreateWithoutRelatedFriendsInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomCreateNestedManyWithoutUserTwoInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutFriendInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRelatedFriendsInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomUncheckedCreateNestedManyWithoutUserTwoInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutFriendInput
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRelatedFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRelatedFriendsInput, UserUncheckedCreateWithoutRelatedFriendsInput>
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUpdateManyWithoutUserTwoNestedInput
    relatedFriends?: FriendsUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUncheckedUpdateManyWithoutUserTwoNestedInput
    relatedFriends?: FriendsUncheckedUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutRelatedFriendsInput = {
    update: XOR<UserUpdateWithoutRelatedFriendsInput, UserUncheckedUpdateWithoutRelatedFriendsInput>
    create: XOR<UserCreateWithoutRelatedFriendsInput, UserUncheckedCreateWithoutRelatedFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRelatedFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRelatedFriendsInput, UserUncheckedUpdateWithoutRelatedFriendsInput>
  }

  export type UserUpdateWithoutRelatedFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRelatedFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUncheckedUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatRoomCreateWithoutMessageInput = {
    id?: string
    unSeenMessageCount?: number
    lastMessage?: MessageCreateNestedOneWithoutChatRoomInput
    userOne: UserCreateNestedOneWithoutChatRoomsOneInput
    userTwo: UserCreateNestedOneWithoutChatRoomsTwoInput
    messages?: MessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutMessageInput = {
    id?: string
    userOneId: string
    userTwoId: string
    unSeenMessageCount?: number
    lastMessageId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutMessageInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutMessageInput, ChatRoomUncheckedCreateWithoutMessageInput>
  }

  export type ChatRoomCreateWithoutMessagesInput = {
    id?: string
    unSeenMessageCount?: number
    lastMessage?: MessageCreateNestedOneWithoutChatRoomInput
    userOne: UserCreateNestedOneWithoutChatRoomsOneInput
    userTwo: UserCreateNestedOneWithoutChatRoomsTwoInput
    Message?: MessageCreateNestedManyWithoutChatRoomLastInput
  }

  export type ChatRoomUncheckedCreateWithoutMessagesInput = {
    id?: string
    userOneId: string
    userTwoId: string
    unSeenMessageCount?: number
    lastMessageId?: string | null
    Message?: MessageUncheckedCreateNestedManyWithoutChatRoomLastInput
  }

  export type ChatRoomCreateOrConnectWithoutMessagesInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomCreateNestedManyWithoutUserTwoInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsCreateNestedManyWithoutRelatedUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutFriendInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomUncheckedCreateNestedManyWithoutUserTwoInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsUncheckedCreateNestedManyWithoutRelatedUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutFriendInput
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomCreateNestedManyWithoutUserTwoInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    receivedRequests?: RequestCreateNestedManyWithoutFriendInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomUncheckedCreateNestedManyWithoutUserTwoInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsUncheckedCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutFriendInput
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type ChatRoomCreateWithoutLastMessageInput = {
    id?: string
    unSeenMessageCount?: number
    userOne: UserCreateNestedOneWithoutChatRoomsOneInput
    userTwo: UserCreateNestedOneWithoutChatRoomsTwoInput
    messages?: MessageCreateNestedManyWithoutChatRoomInput
    Message?: MessageCreateNestedManyWithoutChatRoomLastInput
  }

  export type ChatRoomUncheckedCreateWithoutLastMessageInput = {
    id?: string
    userOneId: string
    userTwoId: string
    unSeenMessageCount?: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatRoomInput
    Message?: MessageUncheckedCreateNestedManyWithoutChatRoomLastInput
  }

  export type ChatRoomCreateOrConnectWithoutLastMessageInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutLastMessageInput, ChatRoomUncheckedCreateWithoutLastMessageInput>
  }

  export type ChatRoomCreateManyLastMessageInputEnvelope = {
    data: ChatRoomCreateManyLastMessageInput | ChatRoomCreateManyLastMessageInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomUpsertWithoutMessageInput = {
    update: XOR<ChatRoomUpdateWithoutMessageInput, ChatRoomUncheckedUpdateWithoutMessageInput>
    create: XOR<ChatRoomCreateWithoutMessageInput, ChatRoomUncheckedCreateWithoutMessageInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutMessageInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutMessageInput, ChatRoomUncheckedUpdateWithoutMessageInput>
  }

  export type ChatRoomUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessage?: MessageUpdateOneWithoutChatRoomNestedInput
    userOne?: UserUpdateOneRequiredWithoutChatRoomsOneNestedInput
    userTwo?: UserUpdateOneRequiredWithoutChatRoomsTwoNestedInput
    messages?: MessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userOneId?: StringFieldUpdateOperationsInput | string
    userTwoId?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUpsertWithoutMessagesInput = {
    update: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatRoomUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessage?: MessageUpdateOneWithoutChatRoomNestedInput
    userOne?: UserUpdateOneRequiredWithoutChatRoomsOneNestedInput
    userTwo?: UserUpdateOneRequiredWithoutChatRoomsTwoNestedInput
    Message?: MessageUpdateManyWithoutChatRoomLastNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userOneId?: StringFieldUpdateOperationsInput | string
    userTwoId?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: MessageUncheckedUpdateManyWithoutChatRoomLastNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUpdateManyWithoutRelatedUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUncheckedUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUncheckedUpdateManyWithoutRelatedUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    receivedRequests?: RequestUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUncheckedUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUncheckedUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutLastMessageInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutLastMessageInput, ChatRoomUncheckedUpdateWithoutLastMessageInput>
    create: XOR<ChatRoomCreateWithoutLastMessageInput, ChatRoomUncheckedCreateWithoutLastMessageInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutLastMessageInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutLastMessageInput, ChatRoomUncheckedUpdateWithoutLastMessageInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutLastMessageInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutLastMessageInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    userOneId?: StringFilter<"ChatRoom"> | string
    userTwoId?: StringFilter<"ChatRoom"> | string
    unSeenMessageCount?: IntFilter<"ChatRoom"> | number
    lastMessageId?: StringNullableFilter<"ChatRoom"> | string | null
  }

  export type UserCreateWithoutSentRequestsInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomCreateNestedManyWithoutUserTwoInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutFriendInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentRequestsInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomUncheckedCreateNestedManyWithoutUserTwoInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsUncheckedCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutFriendInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
  }

  export type UserCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomCreateNestedManyWithoutUserTwoInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomUncheckedCreateNestedManyWithoutUserTwoInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsUncheckedCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
  }

  export type UserUpsertWithoutSentRequestsInput = {
    update: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutFriendNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUncheckedUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUncheckedUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutFriendNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUncheckedUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUncheckedUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomCreateNestedManyWithoutUserTwoInput
    friends?: FriendsCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestCreateNestedManyWithoutFriendInput
    sentRequests?: RequestCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    username?: string | null
    fullName?: string | null
    status?: $Enums.User_status
    lastLogin?: Date | string | null
    password: string
    image?: string | null
    isActivated?: boolean
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    account?: $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedCreateNestedManyWithoutUserOneInput
    chatRoomsTwo?: ChatRoomUncheckedCreateNestedManyWithoutUserTwoInput
    friends?: FriendsUncheckedCreateNestedManyWithoutUserInput
    relatedFriends?: FriendsUncheckedCreateNestedManyWithoutRelatedUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: RequestUncheckedCreateNestedManyWithoutFriendInput
    sentRequests?: RequestUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUser_statusFieldUpdateOperationsInput | $Enums.User_status
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    account?: EnumUser_accountFieldUpdateOperationsInput | $Enums.User_account
    chatRoomsOne?: ChatRoomUncheckedUpdateManyWithoutUserOneNestedInput
    chatRoomsTwo?: ChatRoomUncheckedUpdateManyWithoutUserTwoNestedInput
    friends?: FriendsUncheckedUpdateManyWithoutUserNestedInput
    relatedFriends?: FriendsUncheckedUpdateManyWithoutRelatedUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: RequestUncheckedUpdateManyWithoutFriendNestedInput
    sentRequests?: RequestUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ChatRoomCreateWithoutUserOneInput = {
    id?: string
    unSeenMessageCount?: number
    lastMessage?: MessageCreateNestedOneWithoutChatRoomInput
    userTwo: UserCreateNestedOneWithoutChatRoomsTwoInput
    messages?: MessageCreateNestedManyWithoutChatRoomInput
    Message?: MessageCreateNestedManyWithoutChatRoomLastInput
  }

  export type ChatRoomUncheckedCreateWithoutUserOneInput = {
    id?: string
    userTwoId: string
    unSeenMessageCount?: number
    lastMessageId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChatRoomInput
    Message?: MessageUncheckedCreateNestedManyWithoutChatRoomLastInput
  }

  export type ChatRoomCreateOrConnectWithoutUserOneInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutUserOneInput, ChatRoomUncheckedCreateWithoutUserOneInput>
  }

  export type ChatRoomCreateManyUserOneInputEnvelope = {
    data: ChatRoomCreateManyUserOneInput | ChatRoomCreateManyUserOneInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutUserTwoInput = {
    id?: string
    unSeenMessageCount?: number
    lastMessage?: MessageCreateNestedOneWithoutChatRoomInput
    userOne: UserCreateNestedOneWithoutChatRoomsOneInput
    messages?: MessageCreateNestedManyWithoutChatRoomInput
    Message?: MessageCreateNestedManyWithoutChatRoomLastInput
  }

  export type ChatRoomUncheckedCreateWithoutUserTwoInput = {
    id?: string
    userOneId: string
    unSeenMessageCount?: number
    lastMessageId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutChatRoomInput
    Message?: MessageUncheckedCreateNestedManyWithoutChatRoomLastInput
  }

  export type ChatRoomCreateOrConnectWithoutUserTwoInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutUserTwoInput, ChatRoomUncheckedCreateWithoutUserTwoInput>
  }

  export type ChatRoomCreateManyUserTwoInputEnvelope = {
    data: ChatRoomCreateManyUserTwoInput | ChatRoomCreateManyUserTwoInput[]
    skipDuplicates?: boolean
  }

  export type FriendsCreateWithoutUserInput = {
    id?: string
    relationshipType: $Enums.Friends_relationshipType
    status: $Enums.Friends_status
    created?: Date | string
    updated?: Date | string
    relatedUser: UserCreateNestedOneWithoutRelatedFriendsInput
  }

  export type FriendsUncheckedCreateWithoutUserInput = {
    id?: string
    relatedUserId: string
    relationshipType: $Enums.Friends_relationshipType
    status: $Enums.Friends_status
    created?: Date | string
    updated?: Date | string
  }

  export type FriendsCreateOrConnectWithoutUserInput = {
    where: FriendsWhereUniqueInput
    create: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput>
  }

  export type FriendsCreateManyUserInputEnvelope = {
    data: FriendsCreateManyUserInput | FriendsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendsCreateWithoutRelatedUserInput = {
    id?: string
    relationshipType: $Enums.Friends_relationshipType
    status: $Enums.Friends_status
    created?: Date | string
    updated?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendsUncheckedCreateWithoutRelatedUserInput = {
    id?: string
    userId: string
    relationshipType: $Enums.Friends_relationshipType
    status: $Enums.Friends_status
    created?: Date | string
    updated?: Date | string
  }

  export type FriendsCreateOrConnectWithoutRelatedUserInput = {
    where: FriendsWhereUniqueInput
    create: XOR<FriendsCreateWithoutRelatedUserInput, FriendsUncheckedCreateWithoutRelatedUserInput>
  }

  export type FriendsCreateManyRelatedUserInputEnvelope = {
    data: FriendsCreateManyRelatedUserInput | FriendsCreateManyRelatedUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    chatRoomLast?: ChatRoomCreateNestedOneWithoutMessageInput
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
    ChatRoom?: ChatRoomCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    senderId: string
    chatId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    ChatRoom?: ChatRoomUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    chatRoomLast?: ChatRoomCreateNestedOneWithoutMessageInput
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    ChatRoom?: ChatRoomCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    receiverId: string
    chatId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
    ChatRoom?: ChatRoomUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutFriendInput = {
    id?: string
    status?: $Enums.Request_status
    created?: Date | string
    updated?: Date | string
    sender: UserCreateNestedOneWithoutSentRequestsInput
  }

  export type RequestUncheckedCreateWithoutFriendInput = {
    id?: string
    senderId: string
    status?: $Enums.Request_status
    created?: Date | string
    updated?: Date | string
  }

  export type RequestCreateOrConnectWithoutFriendInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutFriendInput, RequestUncheckedCreateWithoutFriendInput>
  }

  export type RequestCreateManyFriendInputEnvelope = {
    data: RequestCreateManyFriendInput | RequestCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutSenderInput = {
    id?: string
    status?: $Enums.Request_status
    created?: Date | string
    updated?: Date | string
    friend: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type RequestUncheckedCreateWithoutSenderInput = {
    id?: string
    friendId: string
    status?: $Enums.Request_status
    created?: Date | string
    updated?: Date | string
  }

  export type RequestCreateOrConnectWithoutSenderInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput>
  }

  export type RequestCreateManySenderInputEnvelope = {
    data: RequestCreateManySenderInput | RequestCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    ip: string
    device: string
    userAgent: string
    created?: Date | string
    updated?: Date | string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    ip: string
    device: string
    userAgent: string
    created?: Date | string
    updated?: Date | string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutUserOneInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutUserOneInput, ChatRoomUncheckedUpdateWithoutUserOneInput>
    create: XOR<ChatRoomCreateWithoutUserOneInput, ChatRoomUncheckedCreateWithoutUserOneInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutUserOneInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutUserOneInput, ChatRoomUncheckedUpdateWithoutUserOneInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutUserOneInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutUserOneInput>
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutUserTwoInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutUserTwoInput, ChatRoomUncheckedUpdateWithoutUserTwoInput>
    create: XOR<ChatRoomCreateWithoutUserTwoInput, ChatRoomUncheckedCreateWithoutUserTwoInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutUserTwoInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutUserTwoInput, ChatRoomUncheckedUpdateWithoutUserTwoInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutUserTwoInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutUserTwoInput>
  }

  export type FriendsUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendsWhereUniqueInput
    update: XOR<FriendsUpdateWithoutUserInput, FriendsUncheckedUpdateWithoutUserInput>
    create: XOR<FriendsCreateWithoutUserInput, FriendsUncheckedCreateWithoutUserInput>
  }

  export type FriendsUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendsWhereUniqueInput
    data: XOR<FriendsUpdateWithoutUserInput, FriendsUncheckedUpdateWithoutUserInput>
  }

  export type FriendsUpdateManyWithWhereWithoutUserInput = {
    where: FriendsScalarWhereInput
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendsScalarWhereInput = {
    AND?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
    OR?: FriendsScalarWhereInput[]
    NOT?: FriendsScalarWhereInput | FriendsScalarWhereInput[]
    id?: StringFilter<"Friends"> | string
    userId?: StringFilter<"Friends"> | string
    relatedUserId?: StringFilter<"Friends"> | string
    relationshipType?: EnumFriends_relationshipTypeFilter<"Friends"> | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFilter<"Friends"> | $Enums.Friends_status
    created?: DateTimeFilter<"Friends"> | Date | string
    updated?: DateTimeFilter<"Friends"> | Date | string
  }

  export type FriendsUpsertWithWhereUniqueWithoutRelatedUserInput = {
    where: FriendsWhereUniqueInput
    update: XOR<FriendsUpdateWithoutRelatedUserInput, FriendsUncheckedUpdateWithoutRelatedUserInput>
    create: XOR<FriendsCreateWithoutRelatedUserInput, FriendsUncheckedCreateWithoutRelatedUserInput>
  }

  export type FriendsUpdateWithWhereUniqueWithoutRelatedUserInput = {
    where: FriendsWhereUniqueInput
    data: XOR<FriendsUpdateWithoutRelatedUserInput, FriendsUncheckedUpdateWithoutRelatedUserInput>
  }

  export type FriendsUpdateManyWithWhereWithoutRelatedUserInput = {
    where: FriendsScalarWhereInput
    data: XOR<FriendsUpdateManyMutationInput, FriendsUncheckedUpdateManyWithoutRelatedUserInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutFriendInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutFriendInput, RequestUncheckedUpdateWithoutFriendInput>
    create: XOR<RequestCreateWithoutFriendInput, RequestUncheckedCreateWithoutFriendInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutFriendInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutFriendInput, RequestUncheckedUpdateWithoutFriendInput>
  }

  export type RequestUpdateManyWithWhereWithoutFriendInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutFriendInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    senderId?: StringFilter<"Request"> | string
    friendId?: StringFilter<"Request"> | string
    status?: EnumRequest_statusFilter<"Request"> | $Enums.Request_status
    created?: DateTimeFilter<"Request"> | Date | string
    updated?: DateTimeFilter<"Request"> | Date | string
  }

  export type RequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutSenderInput, RequestUncheckedUpdateWithoutSenderInput>
    create: XOR<RequestCreateWithoutSenderInput, RequestUncheckedCreateWithoutSenderInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutSenderInput, RequestUncheckedUpdateWithoutSenderInput>
  }

  export type RequestUpdateManyWithWhereWithoutSenderInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutSenderInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    device?: StringFilter<"Session"> | string
    userAgent?: StringFilter<"Session"> | string
    created?: DateTimeFilter<"Session"> | Date | string
    updated?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type MessageCreateManyChatRoomInput = {
    id?: string
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    senderId: string
    receiverId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
  }

  export type MessageCreateManyChatRoomLastInput = {
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    senderId: string
    receiverId: string
    chatId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
  }

  export type MessageUpdateWithoutChatRoomInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    chatRoomLast?: ChatRoomUpdateOneWithoutMessageNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    ChatRoom?: ChatRoomUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    ChatRoom?: ChatRoomUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUpdateWithoutChatRoomLastInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    ChatRoom?: ChatRoomUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatRoomLastInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    ChatRoom?: ChatRoomUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutChatRoomLastInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatRoomCreateManyLastMessageInput = {
    id?: string
    userOneId: string
    userTwoId: string
    unSeenMessageCount?: number
  }

  export type ChatRoomUpdateWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    userOne?: UserUpdateOneRequiredWithoutChatRoomsOneNestedInput
    userTwo?: UserUpdateOneRequiredWithoutChatRoomsTwoNestedInput
    messages?: MessageUpdateManyWithoutChatRoomNestedInput
    Message?: MessageUpdateManyWithoutChatRoomLastNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userOneId?: StringFieldUpdateOperationsInput | string
    userTwoId?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatRoomNestedInput
    Message?: MessageUncheckedUpdateManyWithoutChatRoomLastNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userOneId?: StringFieldUpdateOperationsInput | string
    userTwoId?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
  }

  export type ChatRoomCreateManyUserOneInput = {
    id?: string
    userTwoId: string
    unSeenMessageCount?: number
    lastMessageId?: string | null
  }

  export type ChatRoomCreateManyUserTwoInput = {
    id?: string
    userOneId: string
    unSeenMessageCount?: number
    lastMessageId?: string | null
  }

  export type FriendsCreateManyUserInput = {
    id?: string
    relatedUserId: string
    relationshipType: $Enums.Friends_relationshipType
    status: $Enums.Friends_status
    created?: Date | string
    updated?: Date | string
  }

  export type FriendsCreateManyRelatedUserInput = {
    id?: string
    userId: string
    relationshipType: $Enums.Friends_relationshipType
    status: $Enums.Friends_status
    created?: Date | string
    updated?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    senderId: string
    chatId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content?: string | null
    file?: string | null
    fileType?: $Enums.Message_fileType | null
    receiverId: string
    chatId: string
    status?: $Enums.Message_status
    created?: Date | string
    updated?: Date | string
    deleted?: boolean
  }

  export type RequestCreateManyFriendInput = {
    id?: string
    senderId: string
    status?: $Enums.Request_status
    created?: Date | string
    updated?: Date | string
  }

  export type RequestCreateManySenderInput = {
    id?: string
    friendId: string
    status?: $Enums.Request_status
    created?: Date | string
    updated?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    ip: string
    device: string
    userAgent: string
    created?: Date | string
    updated?: Date | string
    expiresAt: Date | string
  }

  export type ChatRoomUpdateWithoutUserOneInput = {
    id?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessage?: MessageUpdateOneWithoutChatRoomNestedInput
    userTwo?: UserUpdateOneRequiredWithoutChatRoomsTwoNestedInput
    messages?: MessageUpdateManyWithoutChatRoomNestedInput
    Message?: MessageUpdateManyWithoutChatRoomLastNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutUserOneInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTwoId?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutChatRoomNestedInput
    Message?: MessageUncheckedUpdateManyWithoutChatRoomLastNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserOneInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTwoId?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRoomUpdateWithoutUserTwoInput = {
    id?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessage?: MessageUpdateOneWithoutChatRoomNestedInput
    userOne?: UserUpdateOneRequiredWithoutChatRoomsOneNestedInput
    messages?: MessageUpdateManyWithoutChatRoomNestedInput
    Message?: MessageUpdateManyWithoutChatRoomLastNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutUserTwoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userOneId?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutChatRoomNestedInput
    Message?: MessageUncheckedUpdateManyWithoutChatRoomLastNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserTwoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userOneId?: StringFieldUpdateOperationsInput | string
    unSeenMessageCount?: IntFieldUpdateOperationsInput | number
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FriendsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumFriends_relationshipTypeFieldUpdateOperationsInput | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFieldUpdateOperationsInput | $Enums.Friends_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedUser?: UserUpdateOneRequiredWithoutRelatedFriendsNestedInput
  }

  export type FriendsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    relatedUserId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumFriends_relationshipTypeFieldUpdateOperationsInput | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFieldUpdateOperationsInput | $Enums.Friends_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    relatedUserId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumFriends_relationshipTypeFieldUpdateOperationsInput | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFieldUpdateOperationsInput | $Enums.Friends_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsUpdateWithoutRelatedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumFriends_relationshipTypeFieldUpdateOperationsInput | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFieldUpdateOperationsInput | $Enums.Friends_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendsUncheckedUpdateWithoutRelatedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumFriends_relationshipTypeFieldUpdateOperationsInput | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFieldUpdateOperationsInput | $Enums.Friends_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendsUncheckedUpdateManyWithoutRelatedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumFriends_relationshipTypeFieldUpdateOperationsInput | $Enums.Friends_relationshipType
    status?: EnumFriends_statusFieldUpdateOperationsInput | $Enums.Friends_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    chatRoomLast?: ChatRoomUpdateOneWithoutMessageNestedInput
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    ChatRoom?: ChatRoomUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    ChatRoom?: ChatRoomUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    chatRoomLast?: ChatRoomUpdateOneWithoutMessageNestedInput
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    ChatRoom?: ChatRoomUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    receiverId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    ChatRoom?: ChatRoomUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableEnumMessage_fileTypeFieldUpdateOperationsInput | $Enums.Message_fileType | null
    receiverId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessage_statusFieldUpdateOperationsInput | $Enums.Message_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RequestUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequest_statusFieldUpdateOperationsInput | $Enums.Request_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequest_statusFieldUpdateOperationsInput | $Enums.Request_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequest_statusFieldUpdateOperationsInput | $Enums.Request_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequest_statusFieldUpdateOperationsInput | $Enums.Request_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequest_statusFieldUpdateOperationsInput | $Enums.Request_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequest_statusFieldUpdateOperationsInput | $Enums.Request_status
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}