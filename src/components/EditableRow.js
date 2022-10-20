import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelclick}) => {
    return (
        <tr>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter identite_nationale ..."
                name="identite_nationale"
                value={editFormData.identite_nationale}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter Nom ..."
                name="Nom"
                value={editFormData.Nom}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter date_naissance ..."
                name="date_naissancer"
                value={editFormData.date_naissance}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter Pays_de_naissance ..."
                name="Pays_de_naissance"
                value={editFormData.Pays_de_naissance}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter Pays_de_residence ..."
                name="Pays_de_residence"
                value={editFormData.Pays_de_residence}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter sexe ..."
                name="sexe"
                value={editFormData.sexe}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter Etat_civil ..."
                name="Etat_civil"
                value={editFormData.Etat_civil}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter Langue ..."
                name="Langue"
                value={editFormData.Langue}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelclick}>Cancel</button>
            </td>
            
        </tr>
    );
};

export default EditableRow;