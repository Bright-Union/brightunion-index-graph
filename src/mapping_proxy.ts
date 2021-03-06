import {
  Approval as ApprovalEvent,
  CallUnstake as CallUnstakeEvent,
  FeeActualized as FeeActualizedEvent,
  IndexBurn as IndexBurnEvent,
  IndexDeposit as IndexDepositEvent,
  IndexInternalDeposit as IndexInternalDepositEvent,
  Paused as PausedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Stake as StakeEvent,
  Transfer as TransferEvent,
  Unpaused as UnpausedEvent,
  Unstake as UnstakeEvent
} from "../generated/BrightRiskToken/BrightRiskToken"
import {
  Approval,
  CallUnstake,
  FeeActualized,
  IndexBurn,
  IndexDeposit,
  IndexInternalDeposit,
  Paused,
  Price,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Stake,
  Transfer,
  Unpaused,
  Unstake
} from "../generated/schema"
import { BrightRiskToken } from "../generated/BrightRiskToken/BrightRiskToken"
import { BigInt } from '@graphprotocol/graph-ts'

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleCallUnstake(event: CallUnstakeEvent): void {
  let entity = new CallUnstake(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.controller = event.params.controller
  entity.amount = event.params.amount
  entity.save()
}

export function handleFeeActualized(event: FeeActualizedEvent): void {
  let entity = new FeeActualized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity._manager = event.params._manager
  entity._managerFee = event.params._managerFee
  entity.save()
}

export function handleIndexBurn(event: IndexBurnEvent): void {
  let entity = new IndexBurn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.sender = event.params.sender
  entity.indexAmount = event.params.indexAmount
  entity.baseAmount = event.params.baseAmount
  entity.save()
}

export function handleIndexDeposit(event: IndexDepositEvent): void {
  let entity = new IndexDeposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.depositor = event.params.depositor
  entity.amount = event.params.amount
  entity.depoositors = event.params.depoositors
  entity.externalPool = event.params.externalPool
  entity.save()
}

export function handleIndexInternalDeposit(
  event: IndexInternalDepositEvent
): void {
  let entity = new IndexInternalDeposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.depositor = event.params.depositor
  entity.amount = event.params.amount
  entity.internalPool = event.params.internalPool
  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  ) 

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice

  PriceEntity.save()
  entity.account = event.params.account
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleStake(event: StakeEvent): void {
  let entity = new Stake(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.depositors = event.params.depositors
  entity.stake = event.params.stake
  entity.externalPool = event.params.externalPool
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.account = event.params.account
  entity.save()
}

export function handleUnstake(event: UnstakeEvent): void {
  let entity = new Unstake(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let IndexContract = BrightRiskToken.bind(event.address);
  let indexPrice  = IndexContract.convertIndexToInvestment(BigInt.fromString("1000000000000000000"));
  let PriceEntity = new Price(event.block.timestamp.toString());
  PriceEntity.timestamp = event.block.timestamp
  PriceEntity.price = indexPrice
  PriceEntity.save()

  entity.controller = event.params.controller
  entity.amount = event.params.amount
  entity.save()
}
