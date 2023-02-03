// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletModule } from './wallet/wallet.module';
import { UserModule } from './user/user.module';

import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      username: 'tracker',//update with your sql server username and password below
      password: 'root',
      options: {
        encrypt: false,
        enableArithAbort: true,
      },
      database: 'money_tracker',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      
    }),
    UserModule,
    WalletModule,
    TransactionModule,
  ],
})
export class AppModule {}
