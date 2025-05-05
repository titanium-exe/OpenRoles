import React from 'react'
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from './ui/table'; 
import { Badge } from "./ui/badge";


const AppliedJobsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>All Applied Jobs </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Job Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
         <TableBody>
          {
            [1,2,3,4].map((item, index)=> (
              <TableRow>
                <TableCell>17-04-2025</TableCell>
                <TableCell>Backend Dev</TableCell>
                <TableCell>xyz</TableCell>
                <TableCell className="text-right"><Badge variant="outline" className="rounded-md font-light ">Selected</Badge></TableCell>
              </TableRow>

            ))
          }
         </TableBody>
      </Table>
    </div>
  )
};

export default AppliedJobsTable;