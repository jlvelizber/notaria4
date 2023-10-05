import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, Key, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { MyRequestsInterface } from '../../interfaces'

export const MyRequestsTable: FC<{ myRequests: MyRequestsInterface[] }> = ({
    myRequests,
}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className="text-center">Proceso</th>
                    <th className="text-center">Estado</th>
                    <th className="text-center">Acción</th>
                </tr>
            </thead>
            <tbody>
                {myRequests.length > 0 &&
                    myRequests.map(
                        (myRequest: MyRequestsInterface, key: Key) => {
                            return (
                                <tr key={key}>
                                    <td>{myRequest.doc}</td>
                                    <td>{myRequest.status}</td>
                                    <td className="text-center">
                                        {myRequest.status_code === 3 && (
                                            <Button variant="info">
                                                <FontAwesomeIcon
                                                    icon={faPrint}
                                                />
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            )
                        }
                    )}
            </tbody>
        </Table>
    )
}
