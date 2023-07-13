import React from 'react'
import './action.css'
function ActionDiv() {
  return (
    <div className='ActionDiv'>
            <h1>Admin Actions</h1>
            <div className='btns'>
                    <button>Reset Token</button>
                    <button>Clear History</button>
                    <button>Generate Report</button>
                    <button>Now Serving</button>
                    <button>All Tokens</button>
            </div>
    </div>
  )
}

export default ActionDiv