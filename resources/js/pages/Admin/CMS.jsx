import React, { useState } from 'react'
import { Head, useForm, router } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import '@/../../resources/css/cms.css'

export default function CMS({ settings, team, articles, gallery, divisions }) {
    const [activeTab, setActiveTab] = useState('home')
    const [selectedGroup, setSelectedGroup] = useState('ALL')

    // Page tabs
    const pageTabs = Object.keys(settings);
    const collectionTabs = ['members', 'articles', 'gallery', 'divisions'];
    const isCollection = collectionTabs.includes(activeTab);

    // Stats
    const stats = [
        { label: 'Total Articles', value: articles.length, color: 'text-etalase-red' },
        { label: 'Team Members', value: team.length, color: 'text-gold-500' },
        { label: 'Gallery Pieces', value: gallery.length, color: 'text-white' },
        { label: 'Divisions', value: divisions.length, color: 'text-gold-500' },
        { label: 'Active Pages', value: pageTabs.length, color: 'text-etalase-red' }
    ];

    return (
        <DashboardLayout>
            <Head title="SOVEREIGN STUDIO | CMS" />

            {/* --- STUDIO HEADER --- */}
            <div className="bg-black border-b border-white/5 py-12 px-12">
                <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <span className="w-8 h-[1px] bg-etalase-red"></span>
                            <span className="text-[10px] tracking-[0.4em] uppercase text-text-muted font-bold">Studio Dashboard</span>
                        </div>
                        <h1 className="text-5xl font-serif italic text-white tracking-tighter">Sovereign <span className="not-italic text-etalase-red">Studio</span></h1>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <div key={i} className="studio-stat-card min-w-[180px]">
                                <span className={`text-4xl font-serif italic ${s.color}`}>{s.value}</span>
                                <span className="block text-[8px] uppercase tracking-widest text-text-muted mt-2">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="studio-grid max-w-[1600px] mx-auto">
                {/* --- STUDIO SIDEBAR --- */}
                <aside className="studio-sidebar space-y-12">
                    <div>
                        <h3 className="studio-label px-4 mb-6">Interface Control</h3>
                        <div className="space-y-1">
                            {pageTabs.map(page => (
                                <button
                                    key={page}
                                    onClick={() => { setActiveTab(page); setSelectedGroup('ALL'); }}
                                    className={`w-full text-left px-6 py-4 rounded-lg text-[10px] tracking-widest uppercase font-black transition-all ${activeTab === page ? 'bg-etalase-red text-white shadow-lg shadow-etalase-red/20' : 'text-text-muted hover:bg-white/5 hover:text-white'}`}
                                >
                                    {page} Page
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="studio-label px-4 mb-6">Collections</h3>
                        <div className="space-y-1">
                            {collectionTabs.map(col => (
                                <button
                                    key={col}
                                    onClick={() => setActiveTab(col)}
                                    className={`w-full text-left px-6 py-4 rounded-lg text-[10px] tracking-widest uppercase font-black transition-all ${activeTab === col ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20' : 'text-text-muted hover:bg-white/5 hover:text-white'}`}
                                >
                                    {col}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* --- STUDIO WORKSPACE --- */}
                <main className="studio-content">
                    <div className="animate-in fade-in duration-700">
                        {!isCollection && (
                            <>
                                <div className="flex items-center justify-between mb-12">
                                    <h2 className="text-3xl font-serif italic text-white capitalize">{activeTab} Framework</h2>
                                    <div className="flex bg-black p-1 rounded-lg border border-white/10">
                                        {['ALL', ...new Set(settings[activeTab]?.map(s => s.group) || [])].map(group => (
                                            <button
                                                key={group}
                                                onClick={() => setSelectedGroup(group)}
                                                className={`px-6 py-2 text-[8px] tracking-widest uppercase font-bold rounded-md transition-all ${selectedGroup === group ? 'bg-white/10 text-white' : 'text-text-muted hover:text-white'}`}
                                            >
                                                {group}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                    {(selectedGroup === 'ALL' ? settings[activeTab] : settings[activeTab].filter(s => s.group === selectedGroup)).map(setting => (
                                        <CMSField key={setting.id} setting={setting} />
                                    ))}
                                </div>
                            </>
                        )}

                        {activeTab === 'members' && <TeamManager members={team} />}
                        {activeTab === 'articles' && <ArticleManager articles={articles} />}
                        {activeTab === 'gallery' && <GalleryManager items={gallery} />}
                        {activeTab === 'divisions' && <DivisionManager divisions={divisions} />}
                    </div>
                </main>
            </div>
        </DashboardLayout>
    )
}

// --- MANAGER COMPONENTS ---

function TeamManager({ members }) {
    const [showAdd, setShowAdd] = useState(false)
    const [editing, setEditing] = useState(null)

    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        role: '',
        image: null,
        order: members.length + 1
    })

    const submit = (e) => {
        e.preventDefault()
        const options = {
            onSuccess: () => { setShowAdd(false); setEditing(null); reset(); },
            onError: (errors) => {
                console.error(errors);
                // alert('There are errors in your submission. Please check the form.');
            },
            forceFormData: true
        };

        if (editing) {
            post(route('admin.team.update', editing.id), options)
        } else {
            post(route('admin.team.store'), options)
        }
    }

    const deleteForm = useForm();

    const deleteItem = (id) => {
        if (confirm('Are you sure you want to remove this member?')) {
            deleteForm.delete(route('admin.team.destroy', id), {
                onSuccess: () => { },
                onError: (errors) => console.error(errors)
            });
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-serif italic text-white capitalize">Collective Identity</h2>
                <button
                    onClick={() => { setShowAdd(true); setEditing(null); reset(); }}
                    className="studio-btn-primary"
                >
                    Add Member
                </button>
            </div>

            {(showAdd || editing) && (
                <div className="studio-card mb-12 animate-in slide-in-from-top-4 duration-500">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="studio-label">Member Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="studio-input"
                                />
                                {errors.name && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="studio-label">Position / Role</label>
                                <input
                                    type="text"
                                    value={data.role}
                                    onChange={e => setData('role', e.target.value)}
                                    className="studio-input"
                                />
                                {errors.role && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.role}</p>}
                            </div>
                        </div>
                        <div>
                            <label className="studio-label">Portrait Asset</label>
                            <input
                                type="file"
                                onChange={e => {
                                    const file = e.target.files[0];
                                    if (file && file.size > 10 * 1024 * 1024) {
                                        alert('File size exceeds 10MB limit.');
                                        e.target.value = '';
                                        return;
                                    }
                                    setData('image', file);
                                }}
                                className="text-xs text-studio-muted"
                            />
                            {errors.image && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.image}</p>}
                        </div>
                        <div className="flex gap-4 pt-4 border-t border-white/5">
                            <button disabled={processing} className="studio-btn-primary">
                                {editing ? 'Update Profile' : 'Confirm Accession'}
                            </button>
                            <button
                                type="button"
                                onClick={() => { setShowAdd(false); setEditing(null); reset(); }}
                                className="px-8 py-3 text-[10px] uppercase font-black text-text-muted hover:text-white transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="space-y-4">
                {members.map(member => (
                    <div key={member.id} className="studio-card flex items-center gap-8 group">
                        <div className="w-16 h-16 bg-black rounded-lg overflow-hidden border border-white/5 flex-shrink-0">
                            <img src={member.image_url} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="flex-grow">
                            <h4 className="text-lg font-serif italic text-white">{member.name}</h4>
                            <p className="text-[9px] tracking-[0.2em] text-etalase-red uppercase font-black">{member.role}</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    setEditing(member);
                                    setData({ name: member.name, role: member.role, order: member.order, image: null });
                                    setShowAdd(false);
                                }}
                                className="p-3 bg-white/5 hover:bg-white/10 rounded-md transition-all text-text-muted hover:text-white"
                                title="Edit"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                            </button>
                            <button
                                onClick={() => deleteItem(member.id)}
                                className="p-3 bg-red-500/5 hover:bg-red-500/10 rounded-md transition-all text-red-500/50 hover:text-red-500"
                                title="Delete"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function DivisionManager({ divisions }) {
    const [showAdd, setShowAdd] = useState(false)
    const [editing, setEditing] = useState(null)

    const { data, setData, post, processing, reset, errors } = useForm({
        short_name: '',
        title: '',
        image: null,
        order: divisions.length + 1
    })

    const submit = (e) => {
        e.preventDefault()
        const options = {
            onSuccess: () => { setShowAdd(false); setEditing(null); reset(); },
            onError: (errors) => {
                console.error(errors);
                alert('There are errors in your submission. Please check the form.');
            },
            forceFormData: true
        };

        if (editing) {
            post(route('admin.divisions.update', editing.id), options)
        } else {
            post(route('admin.divisions.store'), options)
        }
    }

    const deleteForm = useForm();

    const deleteItem = (id) => {
        if (confirm('Delete this division?')) {
            deleteForm.delete(`/admin/divisions/${id}`, {
                onSuccess: () => {
                    // Success is handled by page reload/flash message
                },
                onError: (errors) => {
                    console.error(errors);
                }
            });
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-serif italic text-white capitalize">Empire Divisions</h2>
                <button
                    onClick={() => { setShowAdd(true); setEditing(null); reset(); }}
                    className="studio-btn-primary"
                >
                    Add Division
                </button>
            </div>

            {(showAdd || editing) && (
                <div className="studio-card mb-12 animate-in slide-in-from-top-4 duration-500">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="studio-label">Short Name (e.g. TTR)</label>
                                <input
                                    type="text"
                                    value={data.short_name}
                                    onChange={e => setData('short_name', e.target.value)}
                                    className="studio-input"
                                />
                                {errors.short_name && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.short_name}</p>}
                            </div>
                            <div>
                                <label className="studio-label">Division Title</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="studio-input"
                                />
                                {errors.title && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.title}</p>}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="studio-label">Display Order</label>
                                <input
                                    type="number"
                                    value={data.order}
                                    onChange={e => setData('order', e.target.value)}
                                    className="studio-input"
                                />
                                {errors.order && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.order}</p>}
                            </div>
                            <div>
                                <label className="studio-label">Background Asset</label>
                                <input
                                    type="file"
                                    onChange={e => {
                                        const file = e.target.files[0];
                                        if (file && file.size > 10 * 1024 * 1024) {
                                            alert('File size exceeds 10MB limit.');
                                            e.target.value = '';
                                            return;
                                        }
                                        setData('image', file);
                                    }}
                                    className="text-xs text-studio-muted"
                                />
                                {errors.image && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.image}</p>}
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4 border-t border-white/5">
                            <button disabled={processing} className="studio-btn-primary">
                                {editing ? 'Update Division' : 'Confirm Division'}
                            </button>
                            <button
                                type="button"
                                onClick={() => { setShowAdd(false); setEditing(null); reset(); }}
                                className="px-8 py-3 text-[10px] uppercase font-black text-text-muted hover:text-white transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="space-y-4">
                {divisions.map(division => (
                    <div key={division.id} className="studio-card flex items-center gap-8 group">
                        <div className="w-20 h-28 bg-black rounded-lg overflow-hidden border border-white/5 flex-shrink-0">
                            <img src={division.image_url} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] bg-etalase-red/20 text-etalase-red px-2 py-1 rounded font-black tracking-widest">{division.short_name}</span>
                                <h4 className="text-2xl font-serif italic text-white">{division.title}</h4>
                            </div>
                            <p className="text-[8px] text-text-muted mt-2 uppercase tracking-widest">Order: {division.order}</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    setEditing(division);
                                    setData({
                                        short_name: division.short_name,
                                        title: division.title,
                                        order: division.order,
                                        image: null
                                    });
                                    setShowAdd(false);
                                }}
                                className="p-3 bg-white/5 hover:bg-white/10 rounded-md transition-all text-text-muted hover:text-white"
                                title="Edit"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                            </button>
                            <button onClick={() => deleteItem(division.id)} className="p-3 bg-red-500/5 hover:bg-red-500/10 rounded-md transition-all text-red-500/50 hover:text-red-500" title="Delete">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function GalleryManager({ items }) {
    const [showAdd, setShowAdd] = useState(false)
    const [editing, setEditing] = useState(null)

    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        category: 'PERFORMANCE',
        image: null
    })

    const submit = (e) => {
        e.preventDefault()
        const options = {
            onSuccess: () => { setShowAdd(false); setEditing(null); reset(); },
            onError: (errors) => {
                console.error(errors);
            },
            forceFormData: true
        };

        if (editing) {
            post(route('admin.gallery.update', editing.id), options)
        } else {
            post(route('admin.gallery.store'), options)
        }
    }

    const deleteForm = useForm();

    const deleteItem = (id) => {
        if (confirm('Delete this masterpiece?')) {
            deleteForm.delete(route('admin.gallery.destroy', id), {
                onSuccess: () => { },
                onError: (errors) => console.error(errors)
            });
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-serif italic text-white capitalize">Visual Archive</h2>
                <button
                    onClick={() => { setShowAdd(true); setEditing(null); reset(); }}
                    className="studio-btn-primary"
                >
                    Archive New
                </button>
            </div>

            {(showAdd || editing) && (
                <div className="studio-card mb-12 animate-in slide-in-from-top-4 duration-500">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="studio-label">Piece Title</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="studio-input"
                                />
                                {errors.title && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.title}</p>}
                            </div>
                            <div>
                                <label className="studio-label">Category</label>
                                <select
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                    className="studio-input"
                                >
                                    <option>PERFORMANCE</option>
                                    <option>COSTUME</option>
                                    <option>DANCE</option>
                                    <option>THEATER</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="studio-label">Masterpiece Asset</label>
                            <input
                                type="file"
                                onChange={e => {
                                    const file = e.target.files[0];
                                    if (file && file.size > 10 * 1024 * 1024) {
                                        alert('File size exceeds 10MB limit.');
                                        e.target.value = '';
                                        return;
                                    }
                                    setData('image', file);
                                }}
                                className="text-xs text-studio-muted"
                            />
                            {errors.image && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.image}</p>}
                        </div>
                        <div className="flex gap-4 pt-4 border-t border-white/5">
                            <button disabled={processing} className="studio-btn-primary">
                                {editing ? 'Refine Asset' : 'Confirm Archive'}
                            </button>
                            <button
                                type="button"
                                onClick={() => { setShowAdd(false); setEditing(null); reset(); }}
                                className="px-8 py-3 text-[10px] uppercase font-black text-text-muted hover:text-white transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map(item => (
                    <div key={item.id} className="studio-card p-0 overflow-hidden group aspect-square relative">
                        <img src={item.image_url} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
                            <span className="text-[8px] text-etalase-red uppercase tracking-widest font-black mb-2">{item.category}</span>
                            <p className="text-xs text-center italic text-white mb-6 leading-tight">{item.title}</p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        setEditing(item);
                                        setData({ title: item.title, category: item.category, image: null });
                                        setShowAdd(false);
                                    }}
                                    className="p-3 bg-white/10 hover:bg-white/20 rounded-md transition-all text-white"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                </button>
                                <button onClick={() => deleteItem(item.id)} className="p-3 bg-red-500/20 hover:bg-red-500/40 rounded-md transition-all text-red-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function ArticleManager({ articles }) {
    const [showAdd, setShowAdd] = useState(false)
    const [editing, setEditing] = useState(null)

    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        category: 'THEATER',
        excerpt: '',
        content: '',
        image: null,
        author: 'Redaksi Etalase'
    })

    const submit = (e) => {
        e.preventDefault()
        const options = {
            onSuccess: () => { setShowAdd(false); setEditing(null); reset(); },
            onError: (errors) => {
                console.error(errors);
            },
            forceFormData: true
        };

        if (editing) {
            post(route('admin.articles.update', editing.id), options)
        } else {
            post(route('admin.articles.store'), options)
        }
    }

    const deleteForm = useForm();

    const deleteItem = (id) => {
        if (confirm('Erase this manuscript?')) {
            deleteForm.delete(route('admin.articles.destroy', id), {
                onSuccess: () => { },
                onError: (errors) => console.error(errors)
            });
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-serif italic text-white capitalize">Manuscripts</h2>
                <button
                    onClick={() => { setShowAdd(true); setEditing(null); reset(); }}
                    className="studio-btn-primary"
                >
                    Draft Article
                </button>
            </div>

            {(showAdd || editing) && (
                <div className="studio-card mb-12 animate-in slide-in-from-top-4 duration-500">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="studio-label">Manuscript Title</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="studio-input"
                                />
                                {errors.title && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.title}</p>}
                            </div>
                            <div>
                                <label className="studio-label">Classification</label>
                                <select
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                    className="studio-input"
                                >
                                    <option>THEATER</option>
                                    <option>PERFORMANCE</option>
                                    <option>EDITORIAL</option>
                                    <option>CULTURE</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="studio-label">Summary / Excerpt</label>
                            <textarea
                                value={data.excerpt}
                                onChange={e => setData('excerpt', e.target.value)}
                                className="studio-input h-24"
                            />
                            {errors.excerpt && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.excerpt}</p>}
                        </div>
                        <div>
                            <label className="studio-label">Cover Asset</label>
                            <input
                                type="file"
                                onChange={e => {
                                    const file = e.target.files[0];
                                    if (file && file.size > 10 * 1024 * 1024) {
                                        alert('File size exceeds 10MB limit.');
                                        e.target.value = '';
                                        return;
                                    }
                                    setData('image', file);
                                }}
                                className="text-xs text-studio-muted"
                            />
                            {errors.image && <p className="text-red-500 text-[10px] mt-2 uppercase">{errors.image}</p>}
                        </div>
                        <div className="flex gap-4 pt-4 border-t border-white/5">
                            <button disabled={processing} className="studio-btn-primary">
                                {editing ? 'Update Manuscript' : 'Publish Manifest'}
                            </button>
                            <button
                                type="button"
                                onClick={() => { setShowAdd(false); setEditing(null); reset(); }}
                                className="px-8 py-3 text-[10px] uppercase font-black text-text-muted hover:text-white transition-all"
                            >
                                Withdraw
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="space-y-4">
                {articles.map(article => (
                    <div key={article.id} className="studio-card flex items-center gap-8 group">
                        <div className="w-20 h-20 bg-black rounded-lg overflow-hidden border border-white/5 flex-shrink-0">
                            <img src={article.image_url} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="flex-grow">
                            <h4 className="text-lg font-serif italic text-white">{article.title}</h4>
                            <div className="flex gap-4 mt-1">
                                <span className="text-[8px] text-etalase-red uppercase font-black tracking-widest">{article.category}</span>
                                <span className="text-[8px] text-text-muted uppercase font-light tracking-widest">• {article.author}</span>
                            </div>
                            <p className="text-[10px] text-text-muted mt-2 line-clamp-1 max-w-2xl">{article.excerpt}</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    setEditing(article);
                                    setData({
                                        title: article.title,
                                        category: article.category,
                                        excerpt: article.excerpt,
                                        content: article.content || '',
                                        author: article.author,
                                        image: null
                                    });
                                    setShowAdd(false);
                                }}
                                className="p-3 bg-white/5 hover:bg-white/10 rounded-md transition-all text-text-muted hover:text-white"
                                title="Edit"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                            </button>
                            <button onClick={() => deleteItem(article.id)} className="p-3 bg-red-500/5 hover:bg-red-500/10 rounded-md transition-all text-red-500/50 hover:text-red-500" title="Delete">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function CMSField({ setting }) {
    const { data, setData, post, processing, recentlySuccessful } = useForm({
        id: setting.id,
        value: setting.value
    })

    const saveField = () => {
        post(route('admin.cms.update'), {
            preserveScroll: true,
            forceFormData: true
        })
    }

    return (
        <div className="studio-card flex flex-col h-full group">
            <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                    <span className="text-etalase-red text-[8px] tracking-[0.4em] uppercase font-black block mb-1">{setting.group}</span>
                    <h3 className="text-lg text-white font-serif italic leading-tight">{setting.label}</h3>
                </div>
                {recentlySuccessful ? (
                    <span className="text-green-500 text-[8px] font-black uppercase">✓ Saved</span>
                ) : (
                    <button
                        onClick={saveField}
                        disabled={processing}
                        className="p-2 text-etalase-red hover:text-white transition-colors"
                        title="Update Asset"
                    >
                        {processing ? '...' : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>}
                    </button>
                )}
            </div>

            <div className="flex-grow">
                {setting.type === 'video' || setting.type === 'image' ? (
                    <div className="relative group/asset rounded-lg bg-black/40 overflow-hidden aspect-video flex items-center justify-center border border-white/5">
                        {setting.type === 'image' ? (
                            <img src={setting.value} className="max-h-full object-contain" alt="Preview" />
                        ) : (
                            <div className="text-center p-4">
                                <span className="text-text-muted text-[10px] tracking-widest uppercase block mb-2">Video Asset</span>
                                <span className="text-[10px] text-etalase-red truncate block max-w-xs">{setting.value}</span>
                            </div>
                        )}
                        <input
                            type="file"
                            onChange={e => setData('value', e.target.files[0])}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div className="absolute inset-0 bg-etalase-red/80 opacity-0 group-hover/asset:opacity-100 flex items-center justify-center transition-opacity text-white text-[8px] font-black tracking-widest uppercase pointer-events-none">
                            Change Asset
                        </div>
                    </div>
                ) : (
                    <div className="relative">
                        {setting.type === 'textarea' ? (
                            <textarea
                                value={data.value}
                                onChange={e => setData('value', e.target.value)}
                                className="studio-input h-24"
                            />
                        ) : (
                            <input
                                type="text"
                                value={data.value}
                                onChange={e => setData('value', e.target.value)}
                                className="studio-input"
                            />
                        )}
                    </div>
                )}
            </div>

            {data.value instanceof File && (
                <div className="mt-4 p-2 bg-etalase-red/10 border border-etalase-red/20 text-[8px] text-etalase-red font-black uppercase text-center">
                    New: {data.value.name} (Ready)
                </div>
            )}
        </div>
    )
}
