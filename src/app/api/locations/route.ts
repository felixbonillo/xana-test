import { NextResponse } from 'next/server';
import pharmaciesData from '@/features/locator/api/data.json';

export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(pharmaciesData);
}