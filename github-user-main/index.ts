#!/usr/bin/env node
import yargs, { command } from 'yargs'
import { fetchUserHandler } from './fetch-user/fetchUserHandler'
import { fetchUserOptions } from './fetch-user/fetchUserOptions'
import { retrieveUserHandler } from './retrieve-user/retrieveUserHandler'
import { retrieveUserOptions } from './retrieve-user/retrieveUserOptions'

export const options = yargs
  .command('fetch', fetchUserOptions , [fetchUserHandler])
  .command('retrieve', retrieveUserOptions, [retrieveUserHandler])
  .argv