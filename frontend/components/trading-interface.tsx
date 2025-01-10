'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', price: 2000 },
  { time: '04:00', price: 2100 },
  { time: '08:00', price: 2300 },
  { time: '12:00', price: 2200 },
  { time: '16:00', price: 2400 },
  { time: '20:00', price: 2350 },
  { time: '24:00', price: 2450 },
];

export function TradingInterface() {
  const [amount, setAmount] = useState('');
  const [strike, setStrike] = useState('');

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2 p-6">
          <h2 className="text-2xl font-bold mb-4">ETH-USD Options</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="sell">Sell</TabsTrigger>
            </TabsList>
            <TabsContent value="buy">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Option Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select option type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="call">Call</SelectItem>
                      <SelectItem value="put">Put</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Amount (ETH)</Label>
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Strike Price (USD)</Label>
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={strike}
                    onChange={(e) => setStrike(e.target.value)}
                  />
                </div>
                <Button className="w-full">Buy Option</Button>
              </div>
            </TabsContent>
            <TabsContent value="sell">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Option Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select option type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="call">Call</SelectItem>
                      <SelectItem value="put">Put</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Amount (ETH)</Label>
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Strike Price (USD)</Label>
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={strike}
                    onChange={(e) => setStrike(e.target.value)}
                  />
                </div>
                <Button className="w-full" variant="secondary">Sell Option</Button>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}