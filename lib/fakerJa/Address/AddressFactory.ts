import AddressCore from "./AddressCore"

export default class AddressFactory {
  public static generate(): AddressCore {
    return new AddressCore()
  }
}