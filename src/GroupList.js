import React, {Component} from 'react';
import {Button,ButtonGroup,Container,Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';

class GroupList extends Component{
    constructor(props){
      super(props)
        this.state= {groups: [], isLoading: true};
        this.remove = this.remove.bind(this);
    } 

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('/catalogue/all')
          .then(response => response.json())
          .then(data => this.setState({groups: data, isLoading: false}));
      }

      async remove(id) {
        await fetch(`/api/group/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let updatedGroups = [...this.state.groups].filter(i => i.id !== id);
          this.setState({groups: updatedGroups});
        });
      }

      render() {
        const {groups, isLoading} = this.state;
    
        if (isLoading) {
          return <p>Loading...</p>;
        }
    
        const groupList = groups.map(group => {
          const address = `${group.catalogueId || ''} ${group.catalogueName || ''} ${group.colour || ''}`;
          return <tr>
            <td style={{whiteSpace: 'nowrap'}}>{group.catalogueName}</td>
            <td>{address}</td>
            <td>{group.prices.map(price => {
              return <div>{price.finalPrice}</div>
            })}</td>
            <td>
              <ButtonGroup>
                <Button size="sm" color="primary" tag={Link} to={"/groups/" + group.catalogueId}>Edit</Button>
                <Button size="sm" color="danger" onClick={() => this.remove(group.catalogueId)}>Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
        });
    
        return (
          <div>
            <AppNavbar />
            <Container fluid>
              <div className="float-right">
                <Button color="success" tag={Link} to="/catalogue/new">Add Group</Button>
              </div>
              <h3>List Of Catalogues</h3>
              <Table className="mt-4">
                <thead>
                <tr>
                  <th width="20%">Name</th>
                  <th width="20%">Location</th>
                  <th>Prices</th>
                  <th width="10%">Actions</th>
                </tr>
                </thead>
                <tbody>
                {groupList}
                </tbody>
              </Table>
            </Container>
          </div>
        );
      }
}

export default GroupList;