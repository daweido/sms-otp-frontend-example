import {get, post} from '../lib/Networking';
import {User} from '../models/user.model';

const ROUTE_BASE = 'user';

export async function getSuccess() {
  return await get(`${ROUTE_BASE}/`);
}

export async function login(user: User) {
  return await post(`${ROUTE_BASE}/login`, user);
}

export async function submitVerificationCode(
  verificationCode: string,
  userId: number,
) {
  return await post(`${ROUTE_BASE}/verifyCode`, {verificationCode, userId});
}
