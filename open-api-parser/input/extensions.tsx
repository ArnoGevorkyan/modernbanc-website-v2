import { LibraryIcon, MenuAlt4Icon, OfficeBuildingIcon, PaperAirplaneIcon, SwitchHorizontalIcon, TicketIcon, UserIcon } from '@heroicons/react/solid';
import React from 'react';
import { TOperationExtension, TSchemaExtension } from '../../src/open-api/types';
import { Exclusions, Extensions } from '../src';

export const extensions: Extensions<TSchemaExtension, any, TOperationExtension> = {
  paths: {
    '/v1/accounts': {
      post: {
        title: 'Create Account',
      },
      get: {
        title: 'Get Accounts',
      },
    },
    '/v1/accounts/{account_id}': {
      put: {
        title: 'Update Account',
      },
    },
  },
  schemas: {
    Account: {
      title: 'Account',
      description:
        'Accounts are containers that can help you track the amount of something (e.g. money, material, tickets, anything else) in one place.',
      getIcon: () => <LibraryIcon style={{ accentColor: 'black' }} />,
    },
    Entity: {
      title: 'Entity',
      description: 'Entities are anyone who can be assigned accounts in your workspace. This can be you, your customers or anyone else involved.',
      getIcon: () => <UserIcon style={{ accentColor: 'black' }} />,
    },
    Transaction: {
      title: 'Transaction',
      description: 'Transactions allow you to move amounts between accounts.',
      getIcon: () => <SwitchHorizontalIcon style={{ accentColor: 'black' }} />,
    },
    TransactionLine: {
      title: 'Transaction Line',
      description: 'Lines are parts of a transaction.',
      getIcon: () => <MenuAlt4Icon style={{ accentColor: 'black' }} />,
    },
    TransactionItem: {
      title: 'Transaction Item',
      description: 'Items are line items under transaction, e.g `t-shirt`, `jeans`, `vat`, etc.',
      getIcon: () => <TicketIcon style={{ accentColor: 'black' }} />,
    },
    Route: {
      title: 'Route',
      description:
        "Routes are doors for amounts to come in and out of your accounts, in real-world you'd think of routes as payment methods, e.g one account can have multiple routes such as `ach` or a `card`.",
      getIcon: () => <PaperAirplaneIcon style={{ accentColor: 'black' }} />,
    },
    Workspace: {
      getIcon: () => <OfficeBuildingIcon />,
      title: 'Workspace',
      description:
        'Workspaces is where you keep all your objects and build your financial apps. You can add other team members to your workspace to collaborate with them.',
    },
  },
};

export const exclusions: Exclusions = {};
