import Grid from '@/app/components/grid';
import List from '@/app/components/list';
import { toolList } from '@/app/constants/menus';
import React from 'react';
import { createClient } from '@/app/utils/supabase/server';
export default async function Tool() {
    const supabase = await createClient();

    let { data: tools, error } = await supabase.from('tools').select('*');
    console.log(tools);
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
