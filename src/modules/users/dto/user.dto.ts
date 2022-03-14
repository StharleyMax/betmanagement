export class UserDto {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

export class UpdateUserDto {
  id: number;
  oldPassword: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
}
