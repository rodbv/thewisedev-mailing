import { Either, Result } from '../../shared/result'
import { InvalidParamError } from '../errors/invalid-param-error'
import { ExistingUserError } from '../ports/errors/existing-user-error'

export type Response = Either<InvalidParamError | ExistingUserError | Result<any>, Result<void>>
