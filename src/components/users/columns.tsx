import { ColumnDef } from '@tanstack/react-table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'profile_photo_url',
    header: '',
    cell: ({ row }) => {
      const photoUrl = row.getValue('profile_photo_url') as string;
      const name = row.getValue('full_name') as string;
      return (
        <Avatar>
          <AvatarImage src={photoUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: 'full_name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role = row.getValue('role') as string;
      return (
        <Badge variant={role === 'admin' ? 'destructive' : 'default'}>
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'created_at',
    header: 'Joined',
    cell: ({ row }) => {
      return formatDate(row.getValue('created_at'));
    },
  },
];