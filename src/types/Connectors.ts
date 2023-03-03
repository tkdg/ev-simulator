import { MeterValue, SampledValue } from './ocpp/MeterValues';

import { AvailabilityType } from './ocpp/Requests';
import { ChargePointStatus } from './ocpp/ChargePointStatus';
import { ChargingProfile } from './ocpp/ChargingProfile';
import { OCPP16ChargePointErrorCode } from './ocpp/1.6/ChargePointErrorCode';

export interface SampledValueTemplate extends SampledValue {
  fluctuationPercent?: number;
}

export interface Connector {
  availability: AvailabilityType;
  bootStatus?: ChargePointStatus;
  transactionEndToStatus?:ChargePointStatus;
  bootErrorCode?:OCPP16ChargePointErrorCode;
  status?: ChargePointStatus;
  MeterValues: SampledValueTemplate[];
  authorizeIdTag?: string;
  authorized?: boolean;
  transactionStarted?: boolean;
  transactionId?: number;
  transactionSetInterval?: NodeJS.Timeout;
  transactionIdTag?: string;
  energyActiveImportRegisterValue?: number; // In Wh
  transactionEnergyActiveImportRegisterValue?: number; // In Wh
  transactionBeginMeterValue?: MeterValue;
  chargingProfiles?: ChargingProfile[];
}

export type Connectors = Record<string, Connector>;
