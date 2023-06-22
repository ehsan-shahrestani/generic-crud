export abstract class GenericType<T> {
  public id?: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  protected constructor(model?: Partial<T>) {
    if (model) {
      Object.assign(this, model);
    }
    if (this.createdAt) {
      this.createdAt = new Date(this.createdAt);
    }
    if (this.updatedAt) {
      this.updatedAt = new Date(this.updatedAt);
    }

  }

  public toJson(): any {
    return JSON.parse(JSON.stringify(this));
  }

}
