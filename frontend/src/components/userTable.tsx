import React,  { useState, useEffect }  from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from "axios";

type TUser = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export default function UserTable() {
  const [userList, setUserList] = useState<TUser[]>([]);
  const [sortOrder, setSortOrder] = useState<'ascending' | 'descending'>('ascending');

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // sortOrderが'ascending'の時は、'descending'に
  // sortOrderが'descending'の時は、'ascending'に切り替える関数
  const changeSortOrder = () => {
    if (sortOrder === 'ascending') {
      setSortOrder('descending');
    } else {
      setSortOrder('ascending');
    }
  }

  const sortById = (userList: TUser[], sortOrder: 'ascending' | 'descending') => {
    if (sortOrder === 'ascending') {
      return sortAscById(userList);
    } else {
      return sortDescById(userList);
    }
  }

  // userListを受け取りIDの昇順でソートした配列を返す関数
  const sortAscById = (userList: TUser[]) => {
    return userList.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
  }

  // userListを受け取りIDの降順でソートした配列を返す関数
  const sortDescById = (userList: TUser[]) => {
    return userList.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      } else if (a.id > b.id) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ cursor: 'pointer' }} onClick={changeSortOrder}>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortById(userList, sortOrder).map((user) => (
            <TableRow
              key={user.id}
              style={{ height: '60px' }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
