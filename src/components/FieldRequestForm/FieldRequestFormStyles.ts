interface FileUploadStyles {
    customFileUpload: React.CSSProperties;
    fileUploadLabel: React.CSSProperties;
    fileUploadLabelHover: React.CSSProperties;
    fileUploadInput: React.CSSProperties;
  }

export const FieldRequestFormStyles: FileUploadStyles = {
    customFileUpload: {
        position: 'relative',
        display: 'block',
    },
    fileUploadLabel: {
        color: '#ffffff',
        fontSize: '16px',
        padding: '12px 42px',
        cursor: 'pointer',
        fontWeight: 400,
        letterSpacing: '1px',
        textTransform: 'capitalize',
        backgroundColor: '#b22831', // Cambia el color de fondo según lo desees
        border: 'none',
        display: 'inline-block',
        width: '100%',
        textAlign: 'center'
    },
    fileUploadLabelHover: {
        backgroundColor: '#b22831', // Cambia el color de fondo del botón al pasar el mouse
    },
    fileUploadInput: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        cursor: 'pointer',
    },
}
