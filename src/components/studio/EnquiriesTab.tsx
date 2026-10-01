import React, { useState } from 'react';
import { EngineEnquiry, EngineTeam, EnquiryStatus, engine } from '@/lib/engineApi';

const STATUS_LABEL: Record<EnquiryStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  in_progress: 'In progress',
  closed: 'Closed',
  staff: 'Team test',
};

const KIND_LABEL: Record<string, string> = { seller: 'Seller', buyer: 'Buyer' };

const fmt = (iso?: string | null) =>
  iso ? new Date(iso).toLocaleString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '';

type Filter = 'open' | 'closed' | 'staff' | 'all';

const OPEN: EnquiryStatus[] = ['new', 'contacted', 'in_progress'];

const EnquiriesTab: React.FC<{
  enquiries: EngineEnquiry[];
  team: EngineTeam[];
  reload: () => void;
}> = ({ enquiries, team, reload }) => {
  const [filter, setFilter] = useState<Filter>('open');
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});

  const update = async (id: string, patch: Record<string, unknown>) => {
    setBusy(id);
    setError(null);
    const { error: err } = await engine('update_enquiry', { id, ...patch });
    setBusy(null);
    if (err) { setError('That change was not saved. Please try again.'); return; }
    reload();
  };

  const counts = {
    open: enquiries.filter((e) => OPEN.includes(e.status)).length,
    closed: enquiries.filter((e) => e.status === 'closed').length,
    staff: enquiries.filter((e) => e.status === 'staff').length,
    all: enquiries.length,
  };
  const shown = enquiries.filter((e) =>
    filter === 'all' ? true : filter === 'open' ? OPEN.includes(e.status) : e.status === filter,
  );
  const ownerName = (id?: string | null) => {
    const t = team.find((m) => m.id === id);
    return t ? (t.full_name || t.email) : null;
  };

  return (
    <div>
      <h2 className="font-serif text-2xl mb-1">Enquiries</h2>
      <p className="text-[#F8F6F3]/45 text-sm mb-6">Everyone who has asked to speak to DOORS through the website, seller or buyer. Take one, record what happened, and close it when it is settled.</p>

      <div className="flex gap-1 mb-6 flex-wrap">
        {(['open', 'closed', 'staff', 'all'] as Filter[]).map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase border ${filter === f ? 'border-[#C9A961] text-[#C9A961]' : 'border-[#F8F6F3]/10 text-[#F8F6F3]/50 hover:text-[#F8F6F3]'}`}>
            {f === 'open' ? 'Open' : f === 'closed' ? 'Closed' : f === 'staff' ? 'Team tests' : 'All'} ({counts[f]})
          </button>
        ))}
      </div>

      {error && <p className="mb-4 text-sm text-[#E07a5f]">{error}</p>}

      {!shown.length && (
        <div className="bg-[#262626] border border-[#F8F6F3]/8 p-6 text-sm text-[#F8F6F3]/50">
          {filter === 'open' ? 'No open enquiries. New ones from the website appear here as they arrive.' : 'Nothing here.'}
        </div>
      )}

      <div className="space-y-3">
        {shown.map((e) => {
          const owner = ownerName(e.owner_id);
          const note = notes[e.id] ?? e.team_note ?? '';
          return (
            <div key={e.id} className={`bg-[#262626] border p-5 ${e.status === 'new' ? 'border-[#C9A961]/40' : 'border-[#F8F6F3]/8'}`}>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="min-w-0">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A961]">
                    {[KIND_LABEL[e.kind] || e.kind, STATUS_LABEL[e.status], owner].filter(Boolean).join(' - ')}
                  </p>
                  <p className="font-serif text-lg mt-1">{e.name || 'No name given'}</p>
                  <p className="text-sm text-[#F8F6F3]/60 mt-0.5 break-words">
                    {e.email && <a href={`mailto:${e.email}`} className="hover:text-[#C9A961]">{e.email}</a>}
                    {e.email && e.phone && ' - '}
                    {e.phone && <a href={`tel:${e.phone}`} className="hover:text-[#C9A961]">{e.phone}</a>}
                  </p>
                </div>
                <p className="text-[11px] text-[#F8F6F3]/40 shrink-0">{fmt(e.created_at)}</p>
              </div>

              <div className="mt-3 grid sm:grid-cols-3 gap-x-6 gap-y-1 text-xs text-[#F8F6F3]/55">
                {e.area_interest && <p>Area: <span className="text-[#F8F6F3]/80">{e.area_interest}</span></p>}
                {e.budget_band && <p>Budget: <span className="text-[#F8F6F3]/80">{e.budget_band}</span></p>}
                {e.property_ref && <p>Property: <span className="text-[#F8F6F3]/80">{e.property_ref}</span></p>}
                {e.property_category && <p>Category: <span className="text-[#F8F6F3]/80">{e.property_category}</span></p>}
                {e.viewing_requested && <p className="text-[#C9A961]">Introductory viewing requested</p>}
                <p>Consent to contact: <span className="text-[#F8F6F3]/80">{e.contact_consent ? `Yes${e.consented_at ? `, ${fmt(e.consented_at)}` : ''}` : 'Not recorded'}</span></p>
              </div>

              {e.message && <p className="mt-3 text-sm text-[#F8F6F3]/70 whitespace-pre-line">{e.message}</p>}

              <div className="mt-4 pt-4 border-t border-[#F8F6F3]/8 flex flex-wrap items-end gap-4">
                <label className="text-[10px] tracking-[0.15em] uppercase text-[#F8F6F3]/45">
                  Handled by
                  <select value={e.owner_id || ''} disabled={busy === e.id}
                    onChange={(ev) => update(e.id, { owner_id: ev.target.value || null, ...(e.status === 'new' && ev.target.value ? { status: 'contacted' } : {}) })}
                    className="mt-1 block bg-[#1F1F1F] border border-[#F8F6F3]/15 text-sm normal-case tracking-normal text-[#F8F6F3] px-2 py-1.5">
                    <option value="">Nobody yet</option>
                    {team.map((m) => <option key={m.id} value={m.id}>{m.full_name || m.email}</option>)}
                  </select>
                </label>
                <label className="text-[10px] tracking-[0.15em] uppercase text-[#F8F6F3]/45">
                  Status
                  <select value={e.status} disabled={busy === e.id}
                    onChange={(ev) => update(e.id, { status: ev.target.value })}
                    className="mt-1 block bg-[#1F1F1F] border border-[#F8F6F3]/15 text-sm normal-case tracking-normal text-[#F8F6F3] px-2 py-1.5">
                    {(Object.keys(STATUS_LABEL) as EnquiryStatus[]).map((s) => <option key={s} value={s}>{STATUS_LABEL[s]}</option>)}
                  </select>
                </label>
                <label className="flex-1 min-w-[220px] text-[10px] tracking-[0.15em] uppercase text-[#F8F6F3]/45">
                  Team note (never shown to them)
                  <input value={note} disabled={busy === e.id}
                    onChange={(ev) => setNotes((n) => ({ ...n, [e.id]: ev.target.value }))}
                    onBlur={() => { if ((note || null) !== (e.team_note || null)) update(e.id, { team_note: note }); }}
                    className="mt-1 block w-full bg-[#1F1F1F] border border-[#F8F6F3]/15 text-sm normal-case tracking-normal text-[#F8F6F3] px-2 py-1.5" />
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EnquiriesTab;
