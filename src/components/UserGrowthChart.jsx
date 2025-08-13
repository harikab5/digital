import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function UserGrowthChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ede9fe" />
        <XAxis dataKey="date" stroke="#a259c6" fontSize={12} />
        <YAxis stroke="#a259c6" fontSize={12} />
        <Tooltip />
        <Line type="monotone" dataKey="registrations" stroke="#a259c6" strokeWidth={3} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
