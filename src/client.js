import {createClient} from '@supabase/supabase-js';
export const supabase=createClient('https://wreahhksoowbtyfjwksk.supabase.co','sb_publishable_Cuxz74Wlvs_ElZEXOffIKg_FJb8fxoF',{auth:{flowType:'pkce',persistSession:true,storage:sessionStorage,autoRefreshToken:true,detectSessionInUrl:true}});
// Preencher somente após inspeção das migrations. Não inferir parâmetros nem permissões.
export const contracts={roster:null,togglePaid:null,finalizeSale:null};
export async function rosterByPin(pin,scheduleId){if(!contracts.roster)throw Error('Acesso por PIN aguarda validação do contrato SQL da RPC.');const {data,error}=await supabase.rpc('get_pelada_roster_by_pin',contracts.roster(pin,scheduleId));if(error)throw error;return data;}
export async function togglePaid(input){if(!contracts.togglePaid)throw Error('Baixa indisponível até validar autorização, auditoria e parâmetros da RPC.');const {data,error}=await supabase.rpc('toggle_pelada_player_paid',contracts.togglePaid(input));if(error)throw error;return data;}
