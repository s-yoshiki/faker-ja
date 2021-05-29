import BuildingCore, {BuildingCoreConstructor} from "./BuildingCore"

export default class {
  public static generate(): BuildingCore {
    return new BuildingCore({})
  }
}