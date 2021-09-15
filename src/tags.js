  function Tags(){

        return <div className="tags">
            <a className="btn btn-success" onClick={this.setFilter.bind(this, '')}>All</a>
            <a className="btn btn-default" onClick={this.setFilter.bind(this, 'male')}>male</a>
            <a className="btn btn-default" onClick={this.setFilter.bind(this, 'female')}>female</a>
            <a className="btn btn-default" onClick={this.setFilter.bind(this, 'child')}>child</a>
            <a className="btn btn-default" onClick={this.setFilter.bind(this, 'blonde')}>blonde</a>
        </div>
  }

export default Tags