import { Account } from "./Account";
import { Session } from "./Session";
import { User } from "./User";
import { Verification } from "./Verification";

export const entities: [typeof Account, typeof Session, typeof User, typeof Verification]
  = [Account, Session, User, Verification];
