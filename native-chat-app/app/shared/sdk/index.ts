/* tslint:disable */
import { HTTP_PROVIDERS } from '@angular/http';
import { LoopBackAuth } from './services/auth.service';
import { ErrorHandler } from './services/errorHandler.service';
import { LoggerService } from './services/logger.service';
import { JSONSearchParams } from './services/search.params';
import {
  AccountApi,
  RoomApi,
  MessageApi
} from './services/api.service'
export const API_PROVIDERS: any[] = [
	HTTP_PROVIDERS,
	LoopBackAuth,
	ErrorHandler,
	LoggerService,
  JSONSearchParams,
  AccountApi,
  RoomApi,
  MessageApi
];
export * from './models';
export * from './services/api.service';
export * from './services/config.service';
export * from './services/auth.service';
export * from './services/logger.config';
export * from './services/logger.service';