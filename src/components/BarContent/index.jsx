import { useState, useEffect } from 'react';
import { Separator } from '..';
import './index.css';
import moment from 'moment';

export default function Index() {
  return (
      <div className="barContent" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}>
        <Separator />
      </div>
  )
}