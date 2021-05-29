import {PersonCore, PersonCoreConstractor} from "./PersonCore";

export default class PersonFactory {
  public static generate(obj?: PersonCoreConstractor): PersonCore {
    return new PersonCore(obj)
  }
}
