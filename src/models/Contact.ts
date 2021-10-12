export class Contact {
  private _id: string;
  private _username: string;
  private _pic: string;

  constructor(id: string, username: string) {
    this._id = id;
    this._username = username;
    this._pic = `https://randomuser.me/api/portraits/med/women/${Math.floor(
      Math.random() * 75
    )}.jpg`;
  }

  public get id(): string {
    return this._id;
  }

  public get username(): string {
    return this._username;
  }

  public get pic(): string {
    return this._pic;
  }
}
