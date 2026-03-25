import * as fs from 'fs';
import * as path from 'path';
import { response } from './interfaces/response.interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchaseProduct{
    private readonly filePath = path.join(process.cwd(), 'data', 'purchases.json');

    private readFile(): response[]{
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data) as response[];
    }

    getPurchase(): Record<string, number>{
        return this.getPurchase.reduce<Record<string, number>>((acc, PurchaseProduct)) => {
            acc[PurchaseProduct.status]
        }
    }
}
