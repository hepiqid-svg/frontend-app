// types.ts

import { AppError, AppErrorType } from './errors';

export enum AuthProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  LOCAL = 'local',
}

export interface IAuthInfo {
  id: string;
  provider: AuthProvider;
}

export interface ILoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IRegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  surname: string;
}

export interface IUpdateUser {
  name: string;
  surname: string;
  email: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: ICategory;
  price: number;
}

export interface IProductUpdate {
  name: string;
  description: string;
  price: number;
}

export interface IProductForm {
  name: string;
  description: string;
  category: string;
  price: number;
}

export interface IOrder {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
}

export interface IOrderItem {
  id: string;
  productId: string;
  quantity: number;
}

export interface IOrderForm {
  productId: string;
  quantity: number;
}

export interface IProductCreate {
  name: string;
  description: string;
  price: number;
  category: string;
}

export class AppError extends Error {
  public readonly type: AppErrorType;
  public readonly message: string;

  constructor(type: AppErrorType, message: string) {
    super(message);
    this.type = type;
  }
}

export enum AppErrorType {
  AUTH_FAILED = 'AUTH_FAILED',
  PRODUCT_NOT_FOUND = 'PRODUCT_NOT_FOUND',
  GENERIC_ERROR = 'GENERIC_ERROR',
}