import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';

// GET: Retrieve current visitor count
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('visitors')
      .select('count')
      .eq('page', 'home')
      .single();

    if (error) throw error;

    return NextResponse.json({ count: data.count });
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return NextResponse.json({ error: 'Failed to fetch visitor count' }, { status: 500 });
  }
}

// POST: Increment visitor count
export async function POST() {
  try {
    const { data, error } = await supabase.rpc('increment_visitor_count', { page_name: 'home' });

    if (error) throw error;

    return NextResponse.json({ count: data });
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    return NextResponse.json({ error: 'Failed to increment visitor count' }, { status: 500 });
  }
} 