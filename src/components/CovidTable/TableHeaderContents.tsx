import React from 'react';
import { Icon } from 'semantic-ui-react';

interface Props {
  columnDisplayName: string;
  columnName: string;
  sortedBy: string;
  sortedColumn: string;
}

export const TableHeaderContents = ({
  columnDisplayName,
  columnName,
  sortedBy,
  sortedColumn,
}: Props) => {
  const isSorted = sortedColumn === columnName;

  const computeIconName = () => {
    if (sortedBy === 'asc') {
      return 'chevron up';
    }
    return 'chevron down';
  };

  return (
    <>
      {columnDisplayName}{' '}
      {isSorted && (
        <Icon
          data-column-name={columnName}
          data-testid="sort-icon"
          name={computeIconName()}
        />
      )}
    </>
  );
};
