import Grid from '@/app/components/grid';
import List from '@/app/components/list';
import { toolList } from '@/app/constants/menus';
export default function Tool() {
    return (
        <Grid>
            <List list={toolList}> </List>
        </Grid>
    );
}
