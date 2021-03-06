// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AdminChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("previousAdmin", Value.fromBytes(Bytes.empty()));
    this.set("newAdmin", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AdminChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AdminChanged entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AdminChanged", id.toString(), this);
    }
  }

  static load(id: string): AdminChanged | null {
    return changetype<AdminChanged | null>(store.get("AdminChanged", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousAdmin(): Bytes {
    let value = this.get("previousAdmin");
    return value!.toBytes();
  }

  set previousAdmin(value: Bytes) {
    this.set("previousAdmin", Value.fromBytes(value));
  }

  get newAdmin(): Bytes {
    let value = this.get("newAdmin");
    return value!.toBytes();
  }

  set newAdmin(value: Bytes) {
    this.set("newAdmin", Value.fromBytes(value));
  }
}

export class BeaconUpgraded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("beacon", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BeaconUpgraded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BeaconUpgraded entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BeaconUpgraded", id.toString(), this);
    }
  }

  static load(id: string): BeaconUpgraded | null {
    return changetype<BeaconUpgraded | null>(store.get("BeaconUpgraded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get beacon(): Bytes {
    let value = this.get("beacon");
    return value!.toBytes();
  }

  set beacon(value: Bytes) {
    this.set("beacon", Value.fromBytes(value));
  }
}

export class Upgraded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("implementation", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Upgraded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Upgraded entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Upgraded", id.toString(), this);
    }
  }

  static load(id: string): Upgraded | null {
    return changetype<Upgraded | null>(store.get("Upgraded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get implementation(): Bytes {
    let value = this.get("implementation");
    return value!.toBytes();
  }

  set implementation(value: Bytes) {
    this.set("implementation", Value.fromBytes(value));
  }
}

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("spender", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Approval entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Approval entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Approval", id.toString(), this);
    }
  }

  static load(id: string): Approval | null {
    return changetype<Approval | null>(store.get("Approval", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    return value!.toBytes();
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class CallUnstake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("controller", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CallUnstake entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save CallUnstake entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("CallUnstake", id.toString(), this);
    }
  }

  static load(id: string): CallUnstake | null {
    return changetype<CallUnstake | null>(store.get("CallUnstake", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get controller(): Bytes {
    let value = this.get("controller");
    return value!.toBytes();
  }

  set controller(value: Bytes) {
    this.set("controller", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class FeeActualized extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_manager", Value.fromBytes(Bytes.empty()));
    this.set("_managerFee", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FeeActualized entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FeeActualized entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FeeActualized", id.toString(), this);
    }
  }

  static load(id: string): FeeActualized | null {
    return changetype<FeeActualized | null>(store.get("FeeActualized", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _manager(): Bytes {
    let value = this.get("_manager");
    return value!.toBytes();
  }

  set _manager(value: Bytes) {
    this.set("_manager", Value.fromBytes(value));
  }

  get _managerFee(): BigInt {
    let value = this.get("_managerFee");
    return value!.toBigInt();
  }

  set _managerFee(value: BigInt) {
    this.set("_managerFee", Value.fromBigInt(value));
  }
}

export class IndexBurn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("indexAmount", Value.fromBigInt(BigInt.zero()));
    this.set("baseAmount", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save IndexBurn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save IndexBurn entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("IndexBurn", id.toString(), this);
    }
  }

  static load(id: string): IndexBurn | null {
    return changetype<IndexBurn | null>(store.get("IndexBurn", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get indexAmount(): BigInt {
    let value = this.get("indexAmount");
    return value!.toBigInt();
  }

  set indexAmount(value: BigInt) {
    this.set("indexAmount", Value.fromBigInt(value));
  }

  get baseAmount(): BigInt {
    let value = this.get("baseAmount");
    return value!.toBigInt();
  }

  set baseAmount(value: BigInt) {
    this.set("baseAmount", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class IndexDeposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("depositor", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("depoositors", Value.fromBigInt(BigInt.zero()));
    this.set("externalPool", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save IndexDeposit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save IndexDeposit entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("IndexDeposit", id.toString(), this);
    }
  }

  static load(id: string): IndexDeposit | null {
    return changetype<IndexDeposit | null>(store.get("IndexDeposit", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get depositor(): Bytes {
    let value = this.get("depositor");
    return value!.toBytes();
  }

  set depositor(value: Bytes) {
    this.set("depositor", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get depoositors(): BigInt {
    let value = this.get("depoositors");
    return value!.toBigInt();
  }

  set depoositors(value: BigInt) {
    this.set("depoositors", Value.fromBigInt(value));
  }

  get externalPool(): BigInt {
    let value = this.get("externalPool");
    return value!.toBigInt();
  }

  set externalPool(value: BigInt) {
    this.set("externalPool", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class IndexInternalDeposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("depositor", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("internalPool", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save IndexInternalDeposit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save IndexInternalDeposit entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("IndexInternalDeposit", id.toString(), this);
    }
  }

  static load(id: string): IndexInternalDeposit | null {
    return changetype<IndexInternalDeposit | null>(
      store.get("IndexInternalDeposit", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get depositor(): Bytes {
    let value = this.get("depositor");
    return value!.toBytes();
  }

  set depositor(value: Bytes) {
    this.set("depositor", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get internalPool(): BigInt {
    let value = this.get("internalPool");
    return value!.toBigInt();
  }

  set internalPool(value: BigInt) {
    this.set("internalPool", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Paused extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Paused entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Paused entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Paused", id.toString(), this);
    }
  }

  static load(id: string): Paused | null {
    return changetype<Paused | null>(store.get("Paused", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }
}

export class RoleAdminChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("role", Value.fromBytes(Bytes.empty()));
    this.set("previousAdminRole", Value.fromBytes(Bytes.empty()));
    this.set("newAdminRole", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleAdminChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleAdminChanged entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleAdminChanged", id.toString(), this);
    }
  }

  static load(id: string): RoleAdminChanged | null {
    return changetype<RoleAdminChanged | null>(
      store.get("RoleAdminChanged", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get role(): Bytes {
    let value = this.get("role");
    return value!.toBytes();
  }

  set role(value: Bytes) {
    this.set("role", Value.fromBytes(value));
  }

  get previousAdminRole(): Bytes {
    let value = this.get("previousAdminRole");
    return value!.toBytes();
  }

  set previousAdminRole(value: Bytes) {
    this.set("previousAdminRole", Value.fromBytes(value));
  }

  get newAdminRole(): Bytes {
    let value = this.get("newAdminRole");
    return value!.toBytes();
  }

  set newAdminRole(value: Bytes) {
    this.set("newAdminRole", Value.fromBytes(value));
  }
}

export class RoleGranted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("role", Value.fromBytes(Bytes.empty()));
    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("sender", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleGranted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleGranted entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleGranted", id.toString(), this);
    }
  }

  static load(id: string): RoleGranted | null {
    return changetype<RoleGranted | null>(store.get("RoleGranted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get role(): Bytes {
    let value = this.get("role");
    return value!.toBytes();
  }

  set role(value: Bytes) {
    this.set("role", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }
}

export class RoleRevoked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("role", Value.fromBytes(Bytes.empty()));
    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("sender", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleRevoked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleRevoked entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleRevoked", id.toString(), this);
    }
  }

  static load(id: string): RoleRevoked | null {
    return changetype<RoleRevoked | null>(store.get("RoleRevoked", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get role(): Bytes {
    let value = this.get("role");
    return value!.toBytes();
  }

  set role(value: Bytes) {
    this.set("role", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }
}

export class Stake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("depositors", Value.fromBigInt(BigInt.zero()));
    this.set("stake", Value.fromBigInt(BigInt.zero()));
    this.set("externalPool", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Stake entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Stake entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Stake", id.toString(), this);
    }
  }

  static load(id: string): Stake | null {
    return changetype<Stake | null>(store.get("Stake", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get depositors(): BigInt {
    let value = this.get("depositors");
    return value!.toBigInt();
  }

  set depositors(value: BigInt) {
    this.set("depositors", Value.fromBigInt(value));
  }

  get stake(): BigInt {
    let value = this.get("stake");
    return value!.toBigInt();
  }

  set stake(value: BigInt) {
    this.set("stake", Value.fromBigInt(value));
  }

  get externalPool(): BigInt {
    let value = this.get("externalPool");
    return value!.toBigInt();
  }

  set externalPool(value: BigInt) {
    this.set("externalPool", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transfer", id.toString(), this);
    }
  }

  static load(id: string): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}

export class Unpaused extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Unpaused entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Unpaused entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Unpaused", id.toString(), this);
    }
  }

  static load(id: string): Unpaused | null {
    return changetype<Unpaused | null>(store.get("Unpaused", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }
}

export class Unstake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("controller", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Unstake entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Unstake entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Unstake", id.toString(), this);
    }
  }

  static load(id: string): Unstake | null {
    return changetype<Unstake | null>(store.get("Unstake", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get controller(): Bytes {
    let value = this.get("controller");
    return value!.toBytes();
  }

  set controller(value: Bytes) {
    this.set("controller", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Price extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Price entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Price entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Price", id.toString(), this);
    }
  }

  static load(id: string): Price | null {
    return changetype<Price | null>(store.get("Price", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}
