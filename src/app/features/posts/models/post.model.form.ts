export class PostModelForm {
  //DEfault values to emulate empty constructor
  constructor(
    public userId: number | null = null,
    public id: number = 0,
    public title: string = '',
    public body: string = ''
  ) {}
}
