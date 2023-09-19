import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Table } from 'react-bootstrap'

export const MyRequestsTable = () => {
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
                <tr>
                    <td>Permisos de salida</td>
                    <td>Procesado</td>
                    <td className="text-center">
                        <Button variant="info">
                            <FontAwesomeIcon icon={faPrint} />
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>Permisos de salida</td>
                    <td>Requerido</td>
                    <td className="text-center">
                        {/* <Button variant="info">
                            <FontAwesomeIcon icon={faPrint} />
                        </Button> */}
                    </td>
                </tr>
                <tr>
                    <td>Permisos de salida</td>
                    <td>En Proceso</td>
                    <td className="text-center">
                        {/* <Button variant="info">
                            <FontAwesomeIcon icon={faPrint} />
                        </Button> */}
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}
