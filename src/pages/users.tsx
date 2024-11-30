import { useState } from 'react';
import { DataTable } from '@/components/ui/data-table';
import { columns } from '@/components/users/columns';
import { useUsers } from '@/hooks/use-users';

export default function Users() {
  const [pageIndex, setPageIndex] = useState(0);
  const { users, loading } = useUsers(pageIndex);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Users</h1>
      <DataTable
        columns={columns}
        data={users}
        loading={loading}
        pageIndex={pageIndex}
        onPageChange={setPageIndex}
      />
    </div>
  );
}