import Grid from '@/app/components/grid';
import List from '@/app/components/list';
import React from 'react';
import { createClient } from '@/app/utils/supabase/server';
export default async function Tool() {
    const supabase = await createClient();

    const { data: tools } = (await supabase.from('tools').select('*')) as { data: any[] };
    const toolList = tools?.map(item => ({
        title: item.title,
        description: item.description,
        date: item.created_at,
        img: item.cover_url,
        id: item.id,
    }));
    return (
        <Grid>
            <List list={toolList} />
        </Grid>
    );
}
