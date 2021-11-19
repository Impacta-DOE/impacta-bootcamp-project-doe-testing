import * as PUTPessoa from '../request/PUTPessoa.request';
import * as POSTPessoa from '../request/POSTPessoa.request';

const HTTP_OK = 200;
const HTTP_BAD_REQUEST = 400;
const HTTP_NOT_FOUND = 404;

describe('Atualizar Dados Pessoais', () =>{

    it('Atualizar dados pessoas fisica', () => {
        POSTPessoa.salvarPF().then((resPessoaId) => {
            PUTPessoa.atualizaPessoa(resPessoaId.body.id).should((resAtualizaPessoa) => {
                expect(resAtualizaPessoa.status).to.eq(HTTP_OK);
            })
        })
    })

    it('Atualizar com dados invalido pessoa fisica', () => {
        POSTPessoa.salvarPF().then((resPessoaId) => {
            PUTPessoa.atualizaDadosInvalido(resPessoaId.body.id).should((resAtualizaPessoa) => {
                expect(resAtualizaPessoa.status).to.eq(HTTP_BAD_REQUEST);
            })
        })
    })

    it('Atualizar dados com id invalido', () => {
        let idInvalido = 0;
        PUTPessoa.atualizaPessoa(idInvalido).should((resPessoaSemId) => {
            expect(resPessoaSemId.status).to.eq(HTTP_NOT_FOUND);
        })
    })

    it('Atualizar dados sem id', () => {
        PUTPessoa.atualizaPessoa().should((resPessoaSemId)=> {
            expect(resPessoaSemId.status).to.eq(HTTP_BAD_REQUEST);
        })
    })

})