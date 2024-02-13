import { SetMetadata } from '@nestjs/common';

export const Role = (...statuses: string[]) =>
  SetMetadata('statuses', statuses);
