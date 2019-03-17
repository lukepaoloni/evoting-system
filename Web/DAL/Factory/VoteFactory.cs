using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Web.Models;

namespace Web.DAL.Factory
{
    public interface IVoteType
    {
        int Limit { get; }
        void SaveData();
        void Apply();
    }

    public enum VoteType
    {
        FirstPass,
        Preferential,
        Transferable
    }

    public class VoteFactory
    {
        public IVoteType Create(VoteType voteType)
        {
            switch (voteType)
            {
                case VoteType.Preferential:
                    return new Preferential();
                case VoteType.Transferable:
                    return new Transferable();
                case VoteType.FirstPass:
                    return new FirstPast();
                default:
                    throw new NotImplementedException();
            }
        }
    }
}