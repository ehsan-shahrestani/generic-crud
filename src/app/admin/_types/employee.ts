import {GenericType} from "../_classes/baseType";

export class EmployeeTypeBase extends GenericType<EmployeeTypeBase> {
  name?: string;
  family?: string;
  mobile?: string;

  // skills?: SkillTypeBase[];

  constructor(model?: Partial<EmployeeTypeBase>) {
    super(model);
    // if (model?.skills)
    //   this.skills = model.skills.map(t => new SkillTypeBase(t))
    // else this.skills = []
  }
}


export class SkillTypeBase extends GenericType<SkillTypeBase> {
  title?: string;
  description?: string

  constructor(model?: Partial<SkillTypeBase>) {
    super(model);
  }
}
